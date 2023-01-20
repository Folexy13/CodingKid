import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  errorResponse,
  handleResponse,
  otpValidity,
  successResponse,
} from "../Helpers/utility";
import bcrypt from "bcryptjs";
import { Tutors, Students, AuthUser } from "../Interface";
import {
  AuthPayloadDataType,
  FnResponseDataType,
  RegisterDataType,
  TokenDataType,
  typeEnum,
  VerifyOtpDataType,
} from "../Helpers/types";
import jwt from "jsonwebtoken";

//Import Db and configs
import db from "./db.configs";
import config from "../Configs";
import { activateAccount, login, sendOtp } from "../Helpers/auth";

//Tutor/Student Registration
export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation Error", errors.array());
  }
  const { names, email, phone, password, type, gender, course } = req.body;

  const salt: string = await bcrypt.genSalt(15);
  const hashedPassword: string = await bcrypt.hash(password, salt);
  let newUser: RegisterDataType = {
    names,
    phone,
    email,
    password: hashedPassword,
    type,
    gender,
    course,
  };
  try {
    const isUserExist: any =
      (await db.students.findOne({ $or: [{ phone }, { email }] })) ||
      (await db.tutors.findOne({ $or: [{ phone }, { email }] }));

    if (isUserExist) {
      return handleResponse(
        res,
        400,
        false,
        `User with this account already exists in our database`
      );
    }
    const user: any =
      type === "student"
        ? await db.students.create(newUser)
        : await db.tutors.create(newUser);
    if (user) {
      user.type === "student"
        ? await db.studentSettings.create({ studentId: user.id })
        : await db.tutorSettings.create({ tutorId: user.id });
      let payload: AuthPayloadDataType = {
        id: user.id,
        names: user.names,
        phone: user.phone,
        status: "inactive",
        type: user.type,
        email: user.email,
        gender: user.gender,
      };
      const tokenizedUser: string = jwt.sign(payload, config.JWTSECRET);

      await sendOtp({
        email,
        type: typeEnum.VERIFICATION,
        userType: payload.type === "student" ? "student" : "tutor",
      });
      return handleResponse(res, 200, true, tokenizedUser);
    }
  } catch (error) {
    console.log(error);
    return handleResponse(res, 401, false, `An error occured - ${error}`);
  }
};

//Resend Otp
export const resendOtp = async (req: Request, res: Response) => {
  try {
    const { token, type, email }: any = req.body;
    const decoded: any = jwt.verify(token, config.JWTSECRET);
    const otp = await db.otp.findOne({ where: { userId: decoded.id } });
    if (!decoded) return errorResponse(res, `Invalid verification`);
    if (
      otp.verified === false &&
      !otpValidity(otp.expirationTime, new Date())
    ) {
      if (type === "reset") await sendOtp({ email, type: typeEnum.RESET });
      if (type === "verification")
        await sendOtp({ email, type: typeEnum.VERIFICATION });
      if (type === "twoFa") await sendOtp({ email, type: typeEnum.TWOFA });
      otp.destroy();
      return successResponse(res, "Otp sent to your email", email);
    } else if (
      otp.verified === false &&
      otpValidity(otp.expirationTime, new Date())
    ) {
      return errorResponse(res, `Current Otp in use`);
    } else {
      return errorResponse(res, `Account is already verified`);
    }
  } catch (error) {
    return errorResponse(res, `An error occured - ${error}`);
  }
};

//Verify Otp
export const verifyOtp = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation Error", errors.array());
  }
  try {
    // var currentdate = new Date((new Date().setHours(new Date().getHours() - (new Date().getTimezoneOffset() / 60))))
    var currentdate = new Date();
    const { token, otp, email, type }: VerifyOtpDataType = req.body;
    const decoded: any = jwt.verify(token, config.JWTSECRET);
    if (!decoded) return errorResponse(res, `Invalid verification`);
    if (decoded.email != email)
      return errorResponse(res, `OTP was not sent to this particular email`);

    const otpInstance = await db.otp.findOne({ where: { otp } });

    if (!otpInstance) return errorResponse(res, `OTP does not exists`);
    if (otpInstance.verified) return errorResponse(res, `OTP Already Used`);
    if (!otpValidity(otpInstance.expirationTime, currentdate))
      return errorResponse(res, "OTP Expired");
    if (otp != otpInstance.otp) return errorResponse(res, "OTP NOT Matched");

    const updateData = { verified: true, verifiedAt: currentdate };
    await otpInstance.update(updateData);

    if (type === typeEnum.TWOFA) {
      const loginResponse: FnResponseDataType = await login({
        email,
        password: decoded.password,
      });
      if (!loginResponse.status)
        return errorResponse(res, loginResponse.message);
      return successResponse(res, "Login Successful", loginResponse.data);
    } else if (type === typeEnum.RESET) {
      if (decoded.password)
        return errorResponse(
          res,
          "Suspicious attempt discovered! Pls reset password again"
        );
      return successResponse(res, "OTP Matched", token);
    } else {
      const accountActivated = await activateAccount(email, decoded.type);
      if (!accountActivated.status)
        return errorResponse(res, accountActivated.message);
      return successResponse(res, "Account verified!!", email);
    }
  } catch (error) {
    return errorResponse(res, `An error occured - ${error}`);
  }
};

export const preLogin = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, "Validation Error", errors.array());
  }
  const { email, password, type } = req.body;

  try {
    const user =
      (await db.students.findOne({
        where: { email },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: {
          model: db.userSettings,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      })) ||
      (await db.tutors.findOne({
        where: { email },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: {
          model: db.userSettings,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      }));
    if (user) {
      if (user.userSetting.twoFa) {
        const sendOtpResponse: FnResponseDataType = await sendOtp({
          email,
          password,
          type: typeEnum.TWOFA,
        });
        if (!sendOtpResponse.status)
          return errorResponse(res, sendOtpResponse.message);
        const data: TokenDataType = {
          type: "2fa",
          token: sendOtpResponse.data,
        };
        return successResponse(res, sendOtpResponse.message, data);
      } else {
        const loginResponse: FnResponseDataType = await login({
          email,
          password,
        });
        if (!loginResponse.status)
          return errorResponse(res, loginResponse.message);
        return successResponse(res, loginResponse.message, loginResponse.data);
      }
    } else {
      return handleResponse(
        res,
        401,
        false,
        "Incorrect Email,Cross-Check  email"
      );
    }
  } catch (err) {
    console.log(err);
    return handleResponse(res, 401, false, `An error occured - ${err} `);
  }
};

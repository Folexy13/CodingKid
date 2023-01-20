// Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Import DB and configs
import DB from "../Controllers/db.configs";
import config from "../Configs";

// Import types & function files
import {
  SendOtpDataType,
  OtpDetailsDataType,
  LoginDataType,
  AuthPayloadDataType,
  TokenDataType,
} from "./types";
import {
  generateOtp,
  addMinutesToDate,
  fnResponse,
  successResponse,
  otpValidity,
  errorResponse,
} from "./utility";
import { getOtpTemplateData } from "./mailer/templateData";
import { prepareMail } from "./mailer/mailer";
import { otpMailTemplate } from "./mailer/template";

//Send OTP
export const sendOtp = async ({
  email,
  type,
  password,
  userType,
}: SendOtpDataType) => {
  try {
    //Generate OTP
    const otp: number = generateOtp(),
      now: Date = new Date(),
      expirationTime: Date = addMinutesToDate(now, 10);

    const user =
      userType === "student"
        ? await DB.students.findOne({
            where: { email },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          })
        : await DB.tutors.findOne({
            where: { email },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          });

    const otpInstance = await DB.otp.create({
      otp,
      expirationTime,
      studentId: userType === "student" ? user.id : null,
      tutorId: userType === "student" ? null : user.id,
    });

    // Create details object containing the email and otp id
    const otpDetails: OtpDetailsDataType = {
      timestamp: now,
      email,
      password,
      success: true,
      message: "OTP sent to user",
      otpId: otpInstance.id,
    };

    // Encrypt the details object
    const encoded: string = jwt.sign(
      JSON.stringify(otpDetails),
      config.JWTSECRET
    );

    const { mailSubject, mailBody } = getOtpTemplateData({ otp, type });

    // prepare and send mail
    const sendEmail = await prepareMail({
      mailRecipients: email,
      mailSubject,
      mailBody: otpMailTemplate({ subject: mailSubject, body: mailBody }),
      senderName: config.MAIL_FROM_NAME,
      senderEmail: config.MAIL_FROM,
    });

    if (sendEmail.status)
      return fnResponse({ status: true, message: "OTP Sent", data: encoded });
    return fnResponse({ status: false, message: "OTP not sent" });
  } catch (error: any) {
    // console.log(error);
    return fnResponse({
      status: false,
      message: `An error occured:- ${error}`,
    });
  }
};

//Login User
export const login = async ({ email, password }: LoginDataType) => {
  try {
    const user =
      (await DB.students.findOne({
        where: { email },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      })) ||
      (await DB.tutors.findOne({
        where: { email },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }));

    if (user) {
      const validPass: boolean = bcrypt.compareSync(password, user.password);
      if (!validPass)
        return fnResponse({
          status: false,
          message: "Email or Password is incorrect!",
        });

      if (user.status === "inactive")
        return fnResponse({
          status: false,
          message: "Account Suspended!, Please contact support!",
        });

      // Create and assign token
      let payload: AuthPayloadDataType = {
        id: user.id,
        email,
        gender: user.gender,
        names: user.names,
        phone: user.phone,
        status: user.status,
        type: user.type,
      };
      const token: string = jwt.sign(payload, config.JWTSECRET);
      const data: TokenDataType = { type: "token", token, user: payload };
      return fnResponse({ status: true, message: "Login successful", data });
    } else {
      return fnResponse({ status: false, message: "Incorrect Email" });
    }
  } catch (error) {
    console.log(error);
    return fnResponse({
      status: false,
      message: `An error occured - ${error}`,
    });
  }
};

//Activate an account whose OTP is verified
export const activateAccount = async (email: string, userType: string) => {
  try {
    const user =
      userType === "student"
        ? await DB.students.findOne({
            where: { email },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          })
        : await DB.tutors.findOne({
            where: { email },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          });
    user.update({ status: "active" });
    return fnResponse({ status: true, message: "User Activated" });
  } catch (error) {
    console.log(error);
    return fnResponse({
      status: false,
      message: `An error occured - ${error}`,
    });
  }
};

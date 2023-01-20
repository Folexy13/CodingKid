// Module exports
import { Router, Request, Response } from "express";
import {
  preLogin,
  register,
  verifyOtp,
} from "../Controllers/authentications.configs";
import { login } from "../Helpers/auth";
import validate from "../Validator";

// initiiaze the express Router
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    response: {
      message: "Api is Working",
      // ip_address: req.,
      server_time: new Date().getTime(),
      name: "Coding Kids Africa",
    },
  });
});

router.post("/register", validate("/register"), register);
router.post("/verify-otp", validate("/verify-otp"), verifyOtp);
router.post("/login", validate("/login"), preLogin);

export default router;

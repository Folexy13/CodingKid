// Module exports
import { Router, Request, Response } from "express";

// initiiaze the express Router
const router = Router();

router.get("/", (req: Request, res: Response) => {
  //   console.log(req.socket);
  res.status(200).json({
    status: 200,
    response: "Api is Working",
  });
});

export default router;

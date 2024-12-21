// import e from "express";
import { UserModel } from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = UserModel.signUp(name, email, password, type);
    console.log("user created", user);
    res.status(201).send(user);
  }
  signIn(req, res) {
    const result = UserModel.signIn(req.body.email, req.body.password);
    console.log("sign in", result);
    if (!result) {
      return res.status(400).send("Incorrect crendentials");
    } else {
      //1. Create JWT token
      const token = jwt.sign(
        {
          userID: result.id,
          email: result.email,
        },
        "ZsishuRQLKTTWes3l5aFrvgybasrmpKj",
        {
          expiresIn: `7h`,
        }
      );
      //2. Send Jwt token
      return res.status(200).send(token);
    }
  }
}

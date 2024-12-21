import express from "express";
import { likeController } from "./like.controller.js";
// import { upload } from '../../middleware/fileUpload.middleware.js';

const likeRouter = express.Router();

const likeControllers = new likeController();
//localhost:3200/api/cartItems?productId=1&quantity=2
likeRouter.get("/:id", likeControllers.getLikesForPost);
// likeRouter.post("/:id", likeControllers.get)
likeRouter.get("/toggle/:id", likeControllers.toggleLikeForPost);

//
likeRouter.get("/", likeControllers.getallLikes);

export default likeRouter;

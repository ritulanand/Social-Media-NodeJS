import express from "express";
import { likeController } from "./like.controller.js";

const likeRouter = express.Router();

const likeControllers = new likeController();
likeRouter.get("/:id", likeControllers.getLikesForPost);
// likeRouter.post("/:id", likeControllers.get)
likeRouter.get("/toggle/:id", likeControllers.toggleLikeForPost);

//
likeRouter.get("/", likeControllers.getallLikes);

export default likeRouter;

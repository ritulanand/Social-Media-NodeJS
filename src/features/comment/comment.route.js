import express from "express";
import { commentController } from "./comment.controller.js";

const commentRouter = express.Router();

const commentControllers = new commentController();
commentRouter.get("/:id", commentControllers.getAllComments);
commentRouter.post("/:id", commentControllers.addNewComment);
commentRouter.delete("/:id", commentControllers.deleteComment);

commentRouter.put("/:id", commentControllers.updateComment);

export default commentRouter;

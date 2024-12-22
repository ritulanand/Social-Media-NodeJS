import express from "express";
import { postItemsController } from "./post.controller.js";

const postRouter = express.Router();

const postItemsControllers = new postItemsController();
postRouter.get("/filter", postItemsControllers.filterByCaption);
postRouter.put("/archived-post", postItemsControllers.postArchved);
postRouter.get("/archived-posts", postItemsControllers.getarchiveposts);
postRouter.post("/draft", postItemsControllers.postdraft);
postRouter.get("/drafts", postItemsControllers.getdraftposts);
postRouter.post("/publish", postItemsControllers.postPublished);
postRouter.get("/published", postItemsControllers.getPublishposts);
postRouter.get("/createdDate", postItemsControllers.getByCreated);
postRouter.delete("/:id", postItemsControllers.delete);
postRouter.post("/", postItemsControllers.add);
postRouter.get("/all", postItemsControllers.getAll);
postRouter.get("/:id", postItemsControllers.getbyuser);
postRouter.put("/:id", postItemsControllers.update);
postRouter.get("/name/:id", postItemsControllers.get);

export default postRouter;

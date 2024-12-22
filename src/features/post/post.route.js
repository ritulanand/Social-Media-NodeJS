import express from "express";
import { postItemsController } from "./post.controller.js";
// import { upload } from "../../middleware/fileUpload.middleware.js";

const postRouter = express.Router();

const postItemsControllers = new postItemsController();
//localhost:3200/api/cartItems?productId=1&quantity=2
postRouter.get("/filter", postItemsControllers.filterByCaption);
postRouter.put("/archived-post", postItemsControllers.postArchved);
postRouter.get("/archived-posts", postItemsControllers.getarchiveposts);
postRouter.delete("/:id", postItemsControllers.delete);
postRouter.post("/", postItemsControllers.add);
postRouter.get("/all", postItemsControllers.getAll);
postRouter.get("/:id", postItemsControllers.getbyuser);
postRouter.put("/:id", postItemsControllers.update);
postRouter.get("/name/:id", postItemsControllers.get);

export default postRouter;

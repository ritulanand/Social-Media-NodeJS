//1. Import Express
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";

import postRouter from "./src/features/post/post.route.js";
import commentRouter from "./src/features/comment/comment.route.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.route.js";
import likeRouter from "./src/features/like/like.route.js";
// import cartRouter from "./src/features/comment/comment.route.js";
import basicAuthorizer from "./src/middleware/basicAuth.middleware.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import apiDocs from "./swagger.json" assert { type: "json" };
import loggerMiddleware from "./src/middleware/logger.middleware.js";
import { ApplicationError } from "./src/errorHandler/applicationError.js";

//2. Create Server
const server = express();

//CORS policy configuration
/*   
server.use((req,res,next) => {
    // res.header('Access-Control-Allow-Origin','http://localhost:5500')  //particular req.
    res.header('Access-Control-Allow-Origin','*'); //All req.

    // multiple content  types : Headers
    // res.header('Access-Control-Allow-Headers','*');
    res.header('Access-Control-Allow-Headers','Content-Type , Authorization');
    res.header('Access-Control-Allow-Methods','*');
    // return ok for preflight request.
    if(req.method=='OPTIONS'){
        return res.sendStatus(200);
    }
    next();
})
*/
//cors library "http://localhost:5500/index.html"
var corsOptions = {
  origin: "http://localhost:5500",
};
server.use(cors(corsOptions));

server.use(bodyParser.json());
// Bearer <tokens>
// server.use(bodyParser.urlencoded( { extended: false } ))
// for all requests related to product, redirect to product routes.
//MVC : localhost:3200/products //using Api: localhost:3200/api/products
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(loggerMiddleware);
server.use("/api", userRouter);
server.use("/api/posts", jwtAuth, postRouter);
server.use("/api/comments", jwtAuth, commentRouter);
// server.use("/api/likes", jwtAuth, likeRouter);
// server.use("/api/products" ,basicAuthorizer, ProductRouter)

server.use("/api/likes", jwtAuth, likeRouter);

//3. Default request handler
server.get("/", (req, res) => {
  res.send("Welcome to Social Media APIs.");
});

// Error Handler Middleware
server.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }

  //server error
  res.status(500).send("Something went wrong , Please try again later");
});

// 4. Middleware to handle 404 requests.
server.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found.Please check our documentation for more information at localhost:3200/api-docs/"
    );
});

//5. Specify port.
server.listen(3200, () => {
  console.log("Server is running at 3200");
});

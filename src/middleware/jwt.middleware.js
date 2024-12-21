import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
  //1.Read the token
  console.log(req.headers);
  const token = req.headers["authorization"];
  //2. if no token , return the error
  if (!token) {
    return res.status(401).send("unauthorized");
  }
  //3. Check if token is valid
  try {
    const payload = jwt.verify(token, "ZsishuRQLKTTWes3l5aFrvgybasrmpKj");
    req.userID = payload.userID;
    console.log("payload", req.userID);
  } catch (err) {
    //4.return error
    return res.status(401).send("unauthorized");
  }
  //5. call next middleware
  next();
};
export default jwtAuth;

import fs from "fs";
import winston from "winston";

const fsPromise = fs.promises;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "request-logging" },
  transports: [new winston.transports.File({ filename: "logs.txt" })],
});

const loggerMiddleware = async (req, res, next) => {
  //1. Log request body.
  if (!req.url.includes("signin")) {
    const logData = `${req.url}-${JSON.stringify(req.body)}`;

    logger.info(logData);
  }
  next();
};
export default loggerMiddleware;

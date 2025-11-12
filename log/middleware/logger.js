const winston = require("winston");
const expressWinston = require("express-winston");
const generateRequestId = require("../utils/requestId");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: { service: "backend-service" },
  transports: [
    new winston.transports.File({
      filename: "logs/combined.log",
      format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      level: "error",
      format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
    }),
  ],
});

const assignRequestId = (req, res, next) => {
  req.requestId = generateRequestId();
  next();
};

const requestLogger = expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  expressFormat: false,
  colorize: false,
  msg: false,
  dynamicMeta: (req, res) => ({
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    headers: {
      "content-type": req.headers["content-type"],
      "user-agent": req.headers["user-agent"],
      host: req.headers["host"],
    },
    status: res.statusCode,
    responseTime: res.responseTime,
  }),
});

module.exports = { logger, requestLogger, assignRequestId };

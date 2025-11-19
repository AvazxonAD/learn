const winston = require("winston");
const expressWinston = require("express-winston");
const generateRequestId = require("../utils/requestId");
const DailyRotateFile = require("winston-daily-rotate-file");

const assignRequestId = (req, res, next) => {
  req.requestId = generateRequestId();
  next();
};

// REQUEST
const requestLoggerInstance = winston.createLogger({
  levels: {
    request: 0,
  },
  format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
  transports: [
    new DailyRotateFile({
      filename: "logs/request-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "1000m",
      maxFiles: "30d",
      level: "request",
    }),
  ],
});

const requestLogger = expressWinston.logger({
  winstonInstance: requestLoggerInstance,
  level: "request",
  meta: true,
  expressFormat: false,
  colorize: false,
  msg: false,
  dynamicMeta: (req, res) => ({
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    responseStatus: res.statusCode,
    responseTime: res.responseTime,
  }),
});

// RESPONSE
const responseLoggerInstance = winston.createLogger({
  levels: {
    response: 0,
  },
  format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
  transports: [
    new DailyRotateFile({
      filename: "logs/response-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "1000m",
      maxFiles: "30d",
      level: "response",
    }),
  ],
});

const responseLogger = (req, res, next) => {
  res.success = function (data) {
    const logData = {
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl,
      responseStatus: res.statusCode,
      headers: res.getHeaders(),
      data,
    };

    responseLoggerInstance.log("response", logData);

    return res.send(data);
  };

  next();
};

// ERROR
const errorLoggerInstance = winston.createLogger({
  levels: {
    error: 0,
  },
  format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()),
  transports: [
    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "1000m",
      maxFiles: "30d",
      level: "error",
    }),
  ],
});

const errorLogger = (req, res, next) => {
  res.error = function (data) {
    const logData = {
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl,
      responseStatus: res.statusCode,
      headers: res.getHeaders(),
      data,
    };

    responseLoggerInstance.log("response", logData);

    return res.send(data);
  };

  next();
};

module.exports = { requestLogger, responseLogger, assignRequestId, errorLogger, errorLoggerInstance };

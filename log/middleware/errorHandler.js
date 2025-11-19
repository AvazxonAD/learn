const { errorLoggerInstance } = require("./logger");

function errorHandler(err, req, res, next) {
  errorLoggerInstance.log("error", {
    requestId: req.requestId,
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
  });

  console.log(err.message, err.stack);

  res.error({ error: err.message, requestId: req.requestId });
}

module.exports = errorHandler;

const { logger } = require("./logger");

function errorHandler(err, req, res, next) {
  logger.error({
    requestId: req.requestId,
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
  });

  res.status(err.status || 500).json({ error: err.message, requestId: req.requestId });
}

module.exports = errorHandler;

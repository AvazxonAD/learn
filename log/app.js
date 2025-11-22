const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const responseTime = require("./middleware/responseTime");
const { assignRequestId, requestLogger, responseLogger, errorLogger } = require("./middleware/logger");

const app = express();
app.use(express.json({ limit: "100mb" }));
app.use(responseTime);
app.use(assignRequestId);
app.use(responseLogger);
app.use(requestLogger);
app.use(errorLogger);

app.get("/test-get", (req, res) => {
  res.success({ message: "ok", requestId: req.requestId });
});

app.post("/test-post", (req, res) => {
  res.success({ message: "ok", requestId: req.requestId });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Server runing on port`, 3000);
});

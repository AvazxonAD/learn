const express = require("express");
const { assignRequestId, requestLogger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const responseTime = require("./middleware/responseTime");

const app = express();
app.use(express.json());
app.use(responseTime);
app.use(assignRequestId);
app.use(requestLogger);

app.get("/test-get", (req, res) => {
  res.json({ message: "ok", requestId: req.requestId });
});

app.post("/test-post", (req, res) => {
  res.json({ message: "ok", requestId: req.requestId });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Server runing on port`, 3000);
});

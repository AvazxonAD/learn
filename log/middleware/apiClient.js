const axios = require("axios");
const { logger } = require("./logger");

const apiClient = axios.create();

apiClient.interceptors.request.use((req) => {
  logger.info({
    type: "axios",
    method: req.method,
    url: req.url,
    data: req.data,
  });

  return req;
});

apiClient.interceptors.response.use((res) => {
  logger.info(
    {
      type: "axios",
      status: res.status,
      data: res.data,
    },
    (err) => {
      logger.error({
        type: "axios",
        message: err.message,
      });

      return Promise.reject(err);
    }
  );
});

module.exports = apiClient;

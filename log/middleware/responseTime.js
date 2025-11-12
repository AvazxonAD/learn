module.exports = (req, res, next) => {
  const start = process.hrtime();
  res.on("finish", () => {
    const diff = process.hrtime(start);
    res.responseTime = (diff[0] * 1e3 + diff[1] / 1e6).toFixed(2);
  });
  next();
};

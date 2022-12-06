const errorMiddleware = (err, _req, res, next) => {
  console.log(err);
  res.status(err.statusCode).json({ message: err.message });
  next();
};

module.exports = errorMiddleware;

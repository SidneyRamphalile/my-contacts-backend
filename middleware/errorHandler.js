const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;

  // Set the status code for the response
  res.status(statusCode);

  // Respond with JSON for different types of errors
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
    default:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : null,
      });
      break;
  }
};

module.exports = errorHandler;

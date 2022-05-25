import statusCodes from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCode || statusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };
  if (err._message === "User validation failed") {
    defaultError.statusCode = statusCodes.BAD_REQUEST;
    defaultError.msg = err.message;
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = statusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandler;

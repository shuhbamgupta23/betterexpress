const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  const responseBody = {
    message: error.message,
  };

  console.log("Error: ", responseBody);
  res.json(responseBody);
};

export default errorHandler;

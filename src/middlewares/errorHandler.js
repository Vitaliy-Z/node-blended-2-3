import { isHttpError } from 'http-errors';

const errorHandler = (err, req, res, next) => {
  console.log(' errHeandler:', err);

  if (isHttpError(err) === true) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
      data: err.message,
    });
  }
};

export default errorHandler;

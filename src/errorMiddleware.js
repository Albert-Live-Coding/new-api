export const errorMiddleware = (error, req, res, next) => {
  res.sendStatus(500);
};

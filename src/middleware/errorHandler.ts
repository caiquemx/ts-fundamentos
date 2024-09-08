import { Request, Response } from 'express';
import { IErrorHandler } from '../interfaces/IErrorHandler';

export async function errorHandler(err: IErrorHandler, _req: Request, res: Response) {
  const statusCode = err.statusCode || 500;

  console.log(err.message);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message,
  });
}

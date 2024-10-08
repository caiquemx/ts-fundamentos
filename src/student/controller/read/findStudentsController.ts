import { NextFunction, Request, Response } from 'express';
import { findStudentsService } from '../../service/read/findStudentsService';

export async function findStudentsController(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { data, statusCode } = await findStudentsService();
    res.status(statusCode).json({
      data,
    });
  } catch (error) {
    next(error);
  }
}

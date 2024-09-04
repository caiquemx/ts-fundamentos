import { NextFunction, Request, Response } from 'express';
import { findStudentByIdService } from '../../service/student/findStudentByIdService';

export async function findStudentByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { data, statusCode } = await findStudentByIdService(req);
    res.status(statusCode).json({
      data,
    });
  } catch (error) {
    next(error);
  }
}

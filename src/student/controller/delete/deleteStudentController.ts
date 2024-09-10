import { NextFunction, Request, Response } from 'express';
import { deleteStudentService } from '../../service/delete/deleteStudentService';

export async function deleteStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { message, data, statusCode } = await deleteStudentService(req);
    res.status(statusCode).json({
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
}

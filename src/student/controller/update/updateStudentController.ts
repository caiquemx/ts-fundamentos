import { NextFunction, Request, Response } from 'express';
import { updateStudentsService } from '../../service/update/updateStudentService';

export async function updateStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { message, statusCode, data } = await updateStudentsService(req, res);
    res.status(statusCode).json({
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
}

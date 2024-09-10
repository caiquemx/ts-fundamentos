import { NextFunction, Request, Response } from 'express';
import { updateManyStudentsService } from '../../service/update/updateManyStudentsService';

export async function updateManyStudentsController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { message, data, statusCode } = await updateManyStudentsService(req);
    res.status(statusCode).json({
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
}

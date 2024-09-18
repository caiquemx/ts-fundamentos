import { NextFunction, Request, Response } from 'express';
import { createStudentService } from '../../service/create/createStudantService';

export async function createStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { data, message, statusCode } = await createStudentService(req.body);
    res.status(statusCode).json({
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
}

import express from 'express';

import { findStudentByIdController } from '../../controller/student/findStudentByIdController';
import { findStudentsController } from '../../controller/student/findStudentsController';

const studentRouter = express.Router();

studentRouter.get('/student', findStudentsController);

studentRouter.get('/student/:id', findStudentByIdController);

export default studentRouter;

import express from 'express';

import { findStudentByIdController } from '../../controller/student/findStudentByIdController';
import { findStudentsController } from '../../controller/student/findStudentsController';
import { deleteStudentController } from '../../controller/student/deleteStudentController';

const studentRouter = express.Router();

studentRouter.get('/student', findStudentsController);

studentRouter.get('/student/:id', findStudentByIdController);

studentRouter.delete('/student/:id', deleteStudentController);

export default studentRouter;

import express from 'express';

import { findStudentByIdController } from '../../controller/student/findStudentByIdController';
import { findStudentsController } from '../../controller/student/findStudentsController';
import { updateStudentsController } from '../../controller/student/updateStudentsController';

const studentRouter = express.Router();

studentRouter.get('/student', findStudentsController);

studentRouter.get('/student/:id', findStudentByIdController);

studentRouter.put('/student', updateStudentsController);

export default studentRouter;

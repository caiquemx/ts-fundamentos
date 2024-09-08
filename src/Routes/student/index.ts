import express from 'express';

import { findStudentByIdController } from '../../controller/student/findStudentByIdController';
import { findStudentsController } from '../../controller/student/findStudentsController';
import { updateStudentController } from '../../controller/student/updateStudentController';
import { updateManyStudentsController } from '../../controller/student/updateManyStudentsController';

const studentRouter = express.Router();

studentRouter.get('/student', findStudentsController);

studentRouter.get('/student/:id', findStudentByIdController);

studentRouter.put('/student', updateManyStudentsController);

studentRouter.put('/student/:id', updateStudentController);

export default studentRouter;

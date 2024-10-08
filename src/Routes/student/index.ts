import express from 'express';

import { findStudentByIdController } from '../../student/controller/read/findStudentByIdController';
import { findStudentsController } from '../../student/controller/read/findStudentsController';
import { updateStudentController } from '../../student/controller/update/updateStudentController';
import { updateManyStudentsController } from '../../student/controller/update/updateManyStudentsController';
import { deleteStudentController } from '../../student/controller/delete/deleteStudentController';
import { createStudentController } from '../../student/controller/create/createStudentController';

const studentRouter = express.Router();

studentRouter.get('/student', findStudentsController);

studentRouter.get('/student/:id', findStudentByIdController);

studentRouter.put('/student', updateManyStudentsController);

studentRouter.put('/student/:id', updateStudentController);

studentRouter.delete('/student/:id', deleteStudentController);

studentRouter.post('/student', createStudentController);

export default studentRouter;

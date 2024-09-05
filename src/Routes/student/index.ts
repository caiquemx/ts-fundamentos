import express from 'express';

import { findStudentByIdController } from '../../controller/student/findStudentController';

const studentRouter = express.Router();

studentRouter.get('/student');

studentRouter.get('/student/:id', findStudentByIdController);

export default studentRouter;

import express from 'express';
import dotenv from 'dotenv';
import studentRoute from './src/Routes/student';
import { errorHandler } from './src/middleware/errorHandler';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', studentRoute);

app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

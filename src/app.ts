/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, {
  NextFunction,
  Application,
  Request,

  Response,
} from 'express';
// import { StudentRoutes } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/api', UserRouter);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';
  return res.status(statusCode).json({
    success:false,
    message : message,
    error : err

  })
});
export default app;

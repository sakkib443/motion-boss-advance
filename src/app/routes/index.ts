import { Router } from 'express';
import { UserRouter } from '../modules/user/user.route';

const router = Router();
const modelRoutes = [
  {
    path: 'users',
    route: UserRouter,
  },
];
modelRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

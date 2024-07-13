import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';

const CreateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await UserService.createUserService(req.body);
    res.status(200).json({
      success: true,
      message: 'user is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  CreateUserController,
};

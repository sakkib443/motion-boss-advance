import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';

const CreateStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.createUserService(req.body);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  },
);

const GetAllUserController = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.GetAllUserService();
  res.status(200).json({
    succuss: true,
    message: 'All users are faced successfully',
    data: result,
  });
});

const GetSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.GetSingleUserService(id);
    res.status(200).json({
      success: true,
      message: 'User successfully  retrieved',
      data: result,
    });
  },
);

const DeleteUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.DeleteUserService(id);
  res.status(200).json({
    success: true,
    message: 'User successfully deleted',
    data: result,
  });
});

export const UserController = {
  CreateStudentController,
  GetAllUserController,
  GetSingleUserController,
  DeleteUserController
};

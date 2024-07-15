import { UserService } from './user.service';
import { catchAsync } from '../../utils/catchAsync';

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await StudentServices.getAllStudentsFromDB();

//     res.status(200).json({
//       success: true,
//       message: 'Students are retrieved succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

const CreateUserController = catchAsync(async (req, res) => {
  const result = await UserService.createUserService(req.body);
  res.status(200).json({
    success: true,
    message: 'user is created successfully',
    data: result,
  });
});



export const UserController = {
  CreateUserController,
};

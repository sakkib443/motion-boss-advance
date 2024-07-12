import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserService = async (payLoad:string) => {
const result = await User.create(payLoad)

return result
};


export const UserService = {
  createUserService,
};


import { User } from './user.model';

const createUserService = async (payLoad:string) => {
const result = await User.create(payLoad)

return result
};


export const UserService = {
  createUserService,
};

import { ObjectId } from 'mongoose';

export type TUser = {
  _id: ObjectId;
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'student' | 'teacher' | 'admin';
  status: 'in-progress' | 'blocked';
  name: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  contactNo: string;
  dateOfBirth?: string;
  address: string;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};

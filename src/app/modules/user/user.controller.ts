import { Request, Response } from "express"
import { UserService } from "./user.service";




const CreateStudentController = async (req:Request, res:Response)=>{
    try {
      
    
        // const zodParsedData = studentValidationSchema.parse(studentData);
    
        const result = await UserService.createUserService(
        req.body
        )
        res.status(200).json({
            success: true,
            message: 'Student is created succesfully',
            data: result,
          });
    }catch(err){
        res.status(500).json({
            success : false,
            message : 'Something wrong',
            err : err
        })
    }
    
}

export const UserController = {
    CreateStudentController
}
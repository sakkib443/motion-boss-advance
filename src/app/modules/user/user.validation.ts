import { z } from "zod";


const userValidationSchema = z.object({
    password : z.string({
        invalid_type_error:'Password must be string'
    }).min(20,{message:' password must be more than 4 character' })
})


export const userValidation = {
    userValidationSchema
}
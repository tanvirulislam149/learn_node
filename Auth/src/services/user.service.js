import bcrypt from "bcrypt"
import UserModel from "../models/user.model.js"

export const signupService = async (username, password) => {
    const hashPass = await bcrypt.hash(password, 10)
    const result = await UserModel.create({username, password: hashPass})
    return result
}

export const loginService = async(username, password) => {
    const user = await UserModel.findOne({username})
    if(!user || !(await bcrypt.compare(password, user.password))){
        throw new Error("Invalid username and password.")
    }
    
    return user;
}
import bcrypt from "bcrypt"
import UserModel from "../models/user.model.js"

export const signupService = async (username, password) => {
    const hashPass = await bcrypt.hash(password, 10)
    const result = await UserModel.create({username, password: hashPass})
    return result
}
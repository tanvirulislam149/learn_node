import { signupService } from "../services/user.service.js";

export const signupController = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(500).send({
            success: false,
            message: "Please provide username and password"
        })
    }

    try {
        const user = await signupService(username, password)
        res.status(201).send({
            success: true,
            message: "User created Successfully.",
            data: user
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "User creation failed",
            errorMsg: error.message
        })
    }
}
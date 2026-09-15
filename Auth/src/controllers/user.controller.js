import { loginService, signupService } from "../services/user.service.js";

export const signupController = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).send({
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


export const loginController = async(req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).send({
            success: false,
            message: "Please provide username and password"
        })
    }

    try {
        const user = await loginService(username, password)
        req.session.userId = user._id
        res.status(201).send({
            success: true,
            message: "User login Successfully.",
            data: user
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "User login failed",
            errorMsg: error.message
        })
    }
}
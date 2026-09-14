import UserModel from "../models/user.models.js"

export const createUserController = async (req, res) => {
    try {
        const {name, age, weight} = req.body;
        if(!name || !age){
            return res.status(400).send({
                success: false,
                message: "Please provide user's name, age and weight."
            })
        }
        const result = await UserModel.create({name, age, weight})
        res.status(201).send({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

export const getUserController = async (req, res) => {
    try {
        const result = await UserModel.find()
        res.status(200).send({
            success: true,
            data: result 
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message 
        })
    }
}
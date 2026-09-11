import { Router } from "express";
import { SayHiRouteMiddleware } from "../middleware.js";

const userRouter = Router()

userRouter.get("/user-info", (req, res) => {
    res.status(200).send("Getting user info")
})

userRouter.post("/create-user", SayHiRouteMiddleware, (req, res) => {
    res.status(201).send("Creating new user")
})

export default userRouter
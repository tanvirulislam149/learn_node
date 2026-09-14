import { Router } from "express";
import { createUserController } from "../controllers/user.controller.js";

const userRouter = Router()

// Create
userRouter.post("/", createUserController)

// userRouter.get("/", )

// userRouter.put("/", )

// userRouter.delete("/", )

export default userRouter
import { Router } from "express";
import { getLogoutController, postLoginController } from "../controller/auth.controller.js";

const router = Router()

router.post("/login", postLoginController)


router.get("/logout", getLogoutController)

export default router
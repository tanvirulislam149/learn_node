import { Router } from "express";

const router = Router()

router.post("/login", (req, res) => {
    res.status(201).send("Login route")
})


router.get("/logout", (req, res) => {
    res.status(200).send("Logout route")
})

export default router
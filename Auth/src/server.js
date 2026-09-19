import express from "express"
import connectDB from "../config/db.js"
import 'dotenv/config'
import session from "express-session"

import userRouter from "./routes/user.route.js"
import { sessionMiddleware } from "./middlewares/session.middleware.js"
import jwtAuthMiddleware from "./middlewares/jwtAuth.middleware.js"

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // maxAge: 1000 * 60 * 10  // 10 min
        maxAge: 1000 * 60 // 1 min
    }
}))

// connect DB
connectDB()

// Routes
app.use("/api/v1/user", userRouter)

// demo session check route for auth
app.get("/api/v1/tasks", sessionMiddleware, (req, res) => {
    res.status(200).send({
        message: "User authenticated."
    })
})

// jwt check route for auth
app.get("/api/v1/tasks-jwt", jwtAuthMiddleware, (req, res) => {
    res.status(200).send({
        message: "User authenticated by jwt."
    })
})

app.get("/", (req, res) => {
    res.status(200).send("Hello world from auth")
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})
import express from "express"
import connectDB from "../config/db.js"
import 'dotenv/config'
import session from "express-session"

import userRouter from "./routes/user.route.js"

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10  // 10 min
    }
}))

// connect DB
connectDB()

// Routes
app.use("/api/v1/user", userRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hello world from auth")
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})
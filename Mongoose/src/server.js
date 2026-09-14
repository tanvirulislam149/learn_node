import express from "express"
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";

const app = express()
const PORT = 3000;

app.use(express.json())

// Connect to DB
connectDB()

// routes
app.use("/api/v1/user", userRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hello world from mongoose");
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})
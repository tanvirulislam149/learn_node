import express from "express"
import connectDB from "../config/db.js"

const app = express()
const PORT = 3000;

app.use(express.json())

// connect DB
connectDB()

app.get("/", (req, res) => {
    res.status(200).send("Hello world from auth")
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`)
})
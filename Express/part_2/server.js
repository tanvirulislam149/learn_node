import express from "express"
import { SayHiGlobalMiddleware, SayHiRouteMiddleware } from "./middleware.js";

const app = express()
const PORT = 3000;

// middleware
app.use(express.json())
app.use(SayHiGlobalMiddleware)

app.get("/", (req, res) => {
    res.status(200).send("hello from middleware")
})

app.get("/route-middleware", SayHiRouteMiddleware, (req, res) => {
    res.status(200).send("hello from route middleware")
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
    
})
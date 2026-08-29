import express from "express";
import userData from "./data.js"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).send("Hello world from express")
})

// GET requrest to fetch all users
app.get("/api/v1/users", (req, res) => {  // receiving query parameters from the request
    const { name, email } = req.query;
    if (name || email) {
        console.log(req.query);
    }
    res.status(200).send(userData)
})

// GET request to fetch a single user by ID using path parameters
app.get("/api/v1/users/:id", (req, res) => {
    const { id } = req.params
    const user = userData.find((user) => user.id === parseInt(id)) 

    if (!user) {
        return res.status(404).send("User not found")
    }

    res.status(200).send(user)
})

app.listen(PORT, (req, res) => {
    console.log("Server is running on port ", PORT)
})
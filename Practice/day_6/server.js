import express from "express"
import userData from "../../Express/part_1/data.js"

const app = express()
const PORT = 3000;

// middleware
app.use(express.json())  

app.get("/", (req, res) => {
    res.status(200).send("Hello world from express")
})

app.get("/api/v1/users/allUser", (req, res) => {
    const {user} = req.query;
    const data = userData.find(u => u.id === parseInt(user))
    res.status(200).send({
        user, data
    })
})

app.post("/api/v1/user-info", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

app.get("/api/v1/users/:id", (req, res) => {
    res.status(200).send(req.params)
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
    
})
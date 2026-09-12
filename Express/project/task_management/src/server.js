import express from "express"

import authRoutes from "../src/routes/auth.route.js"

const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send('Welcome to task management API');
})

// auth routes
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})
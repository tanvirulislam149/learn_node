import express from "express"
import session from "express-session"

const app = express()
const PORT = 3000;

app.use(session({
    secret: "it's secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 2
    }
}))

app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id)
    res.status(200).send('Hello world');
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})
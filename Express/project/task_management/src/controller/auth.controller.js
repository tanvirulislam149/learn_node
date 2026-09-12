export const postLoginController = (req, res) => {
    res.status(201).send("Login route")
}

export const getLogoutController = (req, res) => {
    res.status(200).send("Logout route")
}
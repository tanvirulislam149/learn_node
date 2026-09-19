import jwt from "jsonwebtoken"

const jwtAuthMiddleware = (req, res, next) => {
    const token = req.header("Authorization")

    if(!token) {
        return res.status(401).send({
            message: "Access denied. JWT token not found."
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Access denied. JWT token expired.",
            errorMsg: error.message
        })
    }
}

export default jwtAuthMiddleware
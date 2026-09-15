export const sessionMiddleware = (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).send({
            message: "Authentication required." 
        })
    }
    next()
}
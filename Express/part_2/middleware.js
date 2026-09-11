const SayHiGlobalMiddleware = (req, res, next) => {
    console.log("Hi from global middleware");
    next()
}

const SayHiRouteMiddleware = (req, res, next) => {
    console.log("Hi from route middleware");
    next()
}

export {
    SayHiGlobalMiddleware,
    SayHiRouteMiddleware
}
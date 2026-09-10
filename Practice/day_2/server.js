const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("hello world from practice.");
})


server.listen(PORT, (req, res) => {
    console.log(`Server listening to port - ${PORT}`);
})

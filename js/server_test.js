// const http = require("http")
//
// const hostname = '127.0.0.1'
// const port = 3000
//
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
// })
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
const http = require("http"), fs = require("fs"), url = require("url");
const hostname = '127.0.0.1'
const port = 3000


let server = http.createServer();
server.on("listening", function () {
    console.log(`Server running at http://${hostname}:${port}/`)
})

server.on("request", function (req, res) {

    res.writeHead(200, "OK", {
        'Content-Type': 'text/html'
    });

    fs.readFile('D:\\GitHub\\text-analyzer\\index.html', 'utf8', function (err, data) {
        if (err) throw err;
        res.end(data);
    });
})

server.timeout = 5000;//5s response time
server.listen(port, hostname);//listing address - 127.0.0.1:3000

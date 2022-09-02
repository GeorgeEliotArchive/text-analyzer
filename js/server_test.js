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

// Method 1.
const http = require("http"), fs = require("fs"), url = require("url");
const hostname = '127.0.0.1'
const port = 3000


let server = http.createServer();
server.on("listening", function () {
    console.log(`Server running at http://${hostname}:${port}/`)
})

server.on("request", function (req, res) {

    res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    // res.writeHead(200, "OK", {"Content-Type": 'text/css;charset=utf-8'});
    // res.writeHead(200, "OK", {"Content-Type": 'text/javascrpt;charset=utf-8'});

    fs.readFile('../index.html', 'utf8', function (err, data) {
        if (err) throw err;
        res.end(data);
    });
})

server.timeout = 1000;//5s response time
server.listen(port, hostname);//listing address - 127.0.0.1:3000


//Method 2.
// let http = require("http");
// let fs = require("fs");
// let url = require("url");
// let path = require("path");
//
// http.createServer((req, res) => {
//
//     let pathName = url.parse(req.url).pathname; //转换为url对象
//
//     //默认加载路径
//     if(pathName == '/') {
//         pathName = "/index.html";
//     }
//
//     //获取文件后缀名
//     let extName = path.extname(pathName);
//
//     // console.log("../fore_end" + pathName);  //例如../fore_end/css/style.css
//     fs.readFile("../fore_end" + pathName, (err, data) => {
//         if(err) { //出错则返回404页面
//             console.log("404 Not Found!");
//             fs.readFile("../fore_end/404.html", (errorNotFound, dataNotFound) => {
//                 if(errorNotFound) {
//                     console.log(errorNotFound);
//                 }
//                 else {
//                     res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
//                     res.write(dataNotFound); //返回404页面
//                     res.end();
//                 }
//             })
//             return;
//         }
//         else {
//             // 获取对应后缀的文件类型
//             let ext = getExt(extName);
//
//             // 设置请求头
//             res.writeHead(200, {"Content-Type": ext + "; charset=utf-8"});
//             res.write(data); //返回请求文件
//             res.end();
//         }
//     })
// }).listen(8888);
//
// // 获取后缀名
// getExt = (extName) => {
//     switch(extName) {
//         case '.html': return 'text/html';
//         case '.css': return 'text/css';
//         case '.js': return 'text/js';
//         default: return 'text/html';
//     }
// }
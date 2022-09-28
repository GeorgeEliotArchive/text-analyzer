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
// const http = require("http"), fs = require("fs"), url = require("url");
// const hostname = '127.0.0.1'
// const port = 3000
//
//
// let server = http.createServer();
// server.on("listening", function () {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
//
// server.on("request", function (req, res) {
//
//     res.writeHead(200, "OK", {'Content-Type': 'text/html'});
//     // res.writeHead(200, "OK", {"Content-Type": 'text/css;charset=utf-8'});
//     // res.writeHead(200, "OK", {"Content-Type": 'text/javascrpt;charset=utf-8'});
//
//     fs.readFile('../index.html', 'utf8', function (err, data) {
//         if (err) throw err;
//         res.end(data);
//     });
// })
//
// server.timeout = 1000;//5s response time
// server.listen(port, hostname);//listing address - 127.0.0.1:3000

// Method 2.
// const http = require('http')
// const path = require('path')
// const fs = require('fs')
//
// const server = http.createServer()
// const port = 80
// const ip = '127.0.0.1'
//
// server.on('request', function(req, res) {
//     // Get url request from clint
//     const url = req.url
//     console.log(url)
//     let fpath_html = ''
//     let fpath_js = ''
//     let fpath_css = ''
//
//     //mapping the url to file path
//     if(url === '/'){
//         fpath_html = path.join(__dirname,'..','index.html')
//         console.log(fpath_html)
//
//         fpath_js = path.join(__dirname, url)
//         console.log(fpath_js)
//
//         fpath_css = path.join(__dirname,'..','css',url)
//         console.log(fpath_css)
//     }
//     else {
//         fpath_html = path.join(__dirname,'..','index.html')
//         fpath_js = path.join(__dirname, url)
//         fpath_css = path.join(__dirname,'..','css',url)
//     }
// })
//
// server.listen(port, function () {
//     console.log(`Server running at http://${ip}:${port}/`)
// })
const express = require('express')
const path = require('path')
// var requestHandler = require('./requestHandler')
var bodyParser = require('body-parser')


const app = express()
const ip = '127.0.0.1'
const port = 80
const fpath_html = path.join(__dirname, '/index.html')

const spawn = require('child_process').spawn

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.post('/index')

app.get('/',function (req,res){
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(fpath_html);
})

// app.get('/todos/:id',function (req, res){
//     res.send(`get/todos/${req.params.id}`);
// })

app.post('/',function (req,res){
    // res.send('Input keyword is:  \"' + req.body.keyword + '\".')
    const keyword = req.body.keyword;
    console.log(keyword);
    // console.log(novel_content);
})


app.listen(port, function (){
    console.log(`Express running on http://${ip}:${port}`)
})
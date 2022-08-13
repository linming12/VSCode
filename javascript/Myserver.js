//创建服务器
const http = require("http");
const ser = http.createServer();
ser.on("request", (req, res) => {
    //表示：允许任何地址来访问服务器；   
    res.setHeader('Access-Control-Allow-Origin', '*');
    //表示：允许发的请求方式，如：'GET,POST,PUT';
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT');
    //表示：允许发的请求头，如：'Content-Type' 请求头的类型;
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    console.log("ddd");
    res.end("嘟嘟嘟");
})

// const exp = require('express');
// ser = exp();
// ser.get('/request', (req, res) => {
//     //cors解决跨域问题


//     log('ddd ');
//     res.end('嘟嘟嘟');
// })

ser.listen("2199", () => {
    console.log("服务器启动中...");
})

/* //创建服务器请求
const { log } = require('console');

const exp = require('express');
const ser = exp();
ser.get('/request', (req, res) => {
    //cors解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    log('wsqsafdasfd ');
    res.end('我不好');
    log(res.url);
})

ser.listen(80, () => {
    console.log('服务器');
}) */
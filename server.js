/**
 * SharedChain Server
 */
"use strict";

var koa = require('koa');
var koaws = require('koa-ws');
var app = koa();

var options = {
    serveClientFile: true,
    clientFilePath: '/koaws.js',
    heartbeat: true,
    heartbeatInterval: 5000
};

app.use(function *(){
    console.log('test2');
    this.body = 'Hello World';
});

app.use(koaws(app, options));

app.listen(3000);

app.ws.register('hello', function* () {
    this.result('world!');
});


{"jsonrpc":"2.0","method":"hello"}
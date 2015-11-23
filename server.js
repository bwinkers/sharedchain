/**
 * SharedChain Chainlink
 *
 * A Node.js application supporting the SharedChain Protocol
 * http://sharedchain.com/protocol
 */
"use strict"

// Set the port this Chainlink will run on
var port = process.env.PORT || 3000

// Static files
const path = require('path')

const ar = require(path.join(__dirname, '/activerules/lib/index.js'));

// Koa base components
const koa = require('koa')
const route = require('koa-route')

// WebSocket via ws
const websockify = require('koa-websocket')
const app = websockify(koa())

// View Templates
const co = require('co')
const views = require('co-views')
var render = views('./views', {
    map: { html: 'nunjucks' }
});

// Static files
const staticCache = require('koa-static-cache')
app.use(staticCache(path.join(__dirname, '/static'), {
    maxAge: 365 * 24 * 60 * 60
}))

// Both routing sections below will call a function and use one `.use` for all routes of that type.
// That will keep the stack smaller.

// REST and Website Routes
app.use(route.get('/', function* () {
    this.body = yield render('page/home.html')
}))

// REST and Website Routes
app.use(route.post('/test', function* () {
    this.body = yield render('page/home.html')
}))


// WebSocket Routes
app.ws.use(route.all('/good', function* (next) {
    // `this` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
    // the websocket is added to the context on `this.websocket`.
    this.websocket.send('Good')
    this.websocket.on('message', function(message) {
        // do something with the message from client
        console.log(message)
    });
    // yielding `next` will pass the context (this) on to the next ws middleware
    yield next
}))

// WebSocket Routes
app.ws.use(route.all('/better', function* (next) {
    // `this` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
    // the websocket is added to the context on `this.websocket`.
    this.websocket.send('Better')
    this.websocket.on('message', function(message) {
        // do something with the message from client
        console.log(message)
    });
    // yielding `next` will pass the context (this) on to the next ws middleware
    yield next
}))

// Turn it all on
app.listen(port)
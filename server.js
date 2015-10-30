/**
 * SharedChain Chainlink
 *
 * A Node.js application supporting the SharedChain Protocol
 * http://sharedchain.com/protocol
 */
"use strict"

// Set the port this Chainlink will run on
var port = process.env.PORT || 3000;

const koa = require('koa'),
    route = require('koa-route'),
    websockify = require('koa-websocket');

const app = websockify(koa());

app.use(route.get('/', function* (next) {
    this.body = 'Heello';
}));

// Note it's app.ws.use and not app.use
app.ws.use(route.all('/', function* (next) {
    // `this` is the regular koa context created from the `ws` onConnection `socket.upgradeReq` object.
    // the websocket is added to the context on `this.websocket`.
    this.websocket.send('Hello World');
    this.websocket.on('message', function(message) {
        // do something with the message from client
        console.log(message);
    });
    // yielding `next` will pass the context (this) on to the next ws middleware
    yield next;
}));

app.listen(port);
/**
 * SharedChain Chainlink
 *
 * A Node.js application supporting the SharedChain Protocol
 * http://sharedchain.com/protocol
 */
"use strict"

var staticCache = require('koa-static-cache');
var koa = require('koa.io');
var router = require('koa-router')();
var path = require('path');
var fs = require('fs');

// Create a basic Koa app
var app = koa();

// Set the port this Chainlink will run on
var port = process.env.PORT || 3000;

// Routing
app.use(staticCache(path.join(__dirname, 'public')));

// Homepage route
router.get('/', function *(next) {
    this.body = fs.createReadStream(path.join(__dirname, 'public/index.html'));
    this.type = 'html';
});

// Use our REST API and HTML Content routes
app.use(router.routes())
    .use(router.allowedMethods());

// Start Listenting
// Don't use WebSockets prior to this
app.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Chainlinks

// chainlinks which are currently connected to the SharedChaint
var chainlinks = {};
var numChainlinks = 0;

// middleware for connect and disconnect
app.io.use(function* chainlinkLeft(next) {
    // on connect
    console.log('chainlink connected');
    console.log(this.headers)
    yield* next;
    // on disconnect
    if (this.addedChainlink) {
        delete chainlinks[this.chainlink];
        --numChainlinks;

        // echo globally that this client has left
        this.broadcast.emit('chainlink left', {
            chainlink: this.chainlink,
            numChainlinks: numChainlinks
        });
    }
});


/**
 * router for socket event
 */

app.io.route('add chainlink', function* (next, chainlink) {
    // we store the chainlink in the socket session for this client
    this.chainlink = chainlink;
    // add the client's chainlink to the global list
    chainlinks[chainlink] = chainlink;
    ++numChainlinks;
    this.addedChainlink = true;
    this.emit('login', {
        numChainlinks: numChainlinks
    });

    // echo globally (all clients) that a chainlink has connected
    this.broadcast.emit('chainlink joined', {
        chainlink: this.chainlink,
        numChainlinks: numChainlinks
    });
});

// when the client emits 'new message', this listens and executes
app.io.route('new message', function* (next, message) {
    // we tell the client to execute 'new message'
    this.broadcast.emit('new message', {
        chainlink: this.chainlink,
        message: message
    });
})
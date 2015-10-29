/**
 * SharedChain Link
 *
 * A Node.js application supporting the SharedChain Protocol
 * http://sharedchain.com/protocol
 */
"use strict"

var staticCache = require('koa-static-cache');
var koa = require('koa.io');
var path = require('path');
var fs = require('fs');

var app = koa();

var port = process.env.PORT || 3000;

// Routing
app.use(staticCache(path.join(__dirname, 'public')));

app.use(function*() {
    this.body = fs.createReadStream(path.join(__dirname, 'public/index.html'));
    this.type = 'html';
});

app.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Chatroom

// links which are currently connected to the chat
var links = {};
var numLinks = 0;

// middleware for connect and disconnect
app.io.use(function* linkLeft(next) {
    // on connect
    console.log('link connected');
    console.log(this.headers)
    yield* next;
    // on disconnect
    if (this.addedLink) {
        delete links[this.link];
        --numLinks;

        // echo globally that this client has left
        this.broadcast.emit('link left', {
            link: this.link,
            numLinks: numLinks
        });
    }
});


/**
 * router for socket event
 */

app.io.route('add link', function* (next, link) {
    // we store the link in the socket session for this client
    this.link = link;
    // add the client's link to the global list
    links[link] = link;
    ++numLinks;
    this.addedLink = true;
    this.emit('login', {
        numLinks: numLinks
    });

    // echo globally (all clients) that a person has connected
    this.broadcast.emit('link joined', {
        link: this.link,
        numLinks: numLinks
    });
});

// when the client emits 'new message', this listens and executes
app.io.route('new message', function* (next, message) {
    // we tell the client to execute 'new message'
    this.broadcast.emit('new message', {
        link: this.link,
        message: message
    });
})
/**
 * ActiveRules Application Framework
 * Koa / Koala / RAML / NuggetData based
 */
"use strict";

/**
 * Use the AR koaApp module to get a Koa app
 * @type {exports|module.exports}
 */
var koaApp = require('./koaApp');

/** Return the active app, this can be used to create a listening server */
exports.activeApp = activeApp;
exports.addRouteDirs = addRouteDirs;
exports.addRoute = addRoute;

/**
 * Process a directory for all routes and add them to the app
 *
 * @param directory
 */
function addRouteDirs(directories) {

}

/**
 * Add a single route to the app.
 *
 * @param route
 */
function addRoute(route) {
    koaApp.use(function *(){
        this.body = 'Hello World';
    });
}

/**
 * Return a fully fleshed out Koa app.
 * @returns {exports|module.exports}
 */
function activeApp() {
    return koaApp;
}
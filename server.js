/**
 * SharedChain Server
 */
"use strict";

/**
 * Include the ActiveRules module
 * This provides an opinionated means to create a Koa app.
 * @type {exports|module.exports}
 */
var ar = require('./activerules');

/**
 * Define a directory that has the ActiveRule Configs
 */
ar.addRoute('/config');

var app = ar.activeApp();

/**
 * Define the port you want the app to listen on
 */
app.listen(8888);
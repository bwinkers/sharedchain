/**
 * Provide a Koa.js app
 * Currently using Koala on top of Koa.
 * Make changes to the base Koa app here.
 */

/**
 * Use Koala to provide reasonable features on top of Koa.js, Koala requries Koa.
 */
var koala = require('koala');

/**
 * Export a Koala app
 */
exports = module.exports = koala();
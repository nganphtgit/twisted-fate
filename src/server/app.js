#!/usr/bin/env node

/**
 * Module dependencies.
 */

const express = require('express');
const server = express();
const next = require('next');
const debug = require('debug')('webadmin:server');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Get port from environment and store in Express.
 */

const port = process.env.WEBSITE_PORT || '3000';

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  hostname: 'localhost',
  port: port,
});
const handle = app.getRequestHandler();

server.set('port', port);
require('./setup/middleware')(server);

app.prepare().then(() => {
  /**
   * Event listener for HTTP server "error" event.
   */

  const onError = function (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  };

  /**
   * Event listener for HTTP server "listening" event.
   */

  const onListening = function () {
    const addr = httpServer.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
  };

  require('./setup/routes')(server);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  /**
   * Create HTTP server.
   */

  const httpServer = http.createServer(server);

  /**
   * Listen on provided port, on all network interfaces.
   */
  httpServer.listen(port);
  httpServer.on('error', onError);
  httpServer.on('listening', onListening);
});
const express = require('express')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const server = async (app) => {
  await app.prepare();
  const server = express();
  const handle = app.getRequestHandler();
  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next));
  server.get('*', (req, res) => handle(req, res));
  return server;
}

module.exports = server;


const functions = require('firebase-functions')
const next = require('next')
const expressServer = require('./server');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler();

const server = expressServer(app, { handle, config: {port: PORT} })

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => server(req, res))
})

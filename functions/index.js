const functions = require('firebase-functions')
const next = require('next')
const expressServer = require('./server');

var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler();

const server = expressServer(app, { handle, config: {port: 3000} })

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => server(req, res))
})

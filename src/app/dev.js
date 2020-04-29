const next = require('next');
const expressServer = require('./server');
const dir = './src/app'
const app = next({ dev: process.env.NODE_ENV !== 'production', dir });
const PORT = process.env.PORT || 3000;

(async () => {
  const server = await expressServer(app);

  await server.listen(PORT);
  console.log(`> Ready on http://localhost:${PORT}`);
})();

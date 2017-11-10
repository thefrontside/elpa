const server = require('./index');

server.then(() => {
  process.exit(0);
}).catch(() => {
  console.log('failed to start server');
  process.exit(1);
});

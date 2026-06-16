const net = require('net');
const path = require('path');
const httpServer = require('http-server');

require('./build');

const host = '0.0.0.0';
const startPort = Number(process.env.PORT || 4173);
const dist = path.resolve(__dirname, '..', 'dist');

function isFree(port) {
  return new Promise(resolve => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}

async function findPort(port) {
  for(let current = port; current < port + 20; current += 1) {
    if(await isFree(current)) return current;
  }
  throw new Error(`No hay puertos libres entre ${port} y ${port + 19}.`);
}

findPort(startPort).then(port => {
  const server = httpServer.createServer({
    root: dist,
    cache: -1
  });

  server.listen(port, host, () => {
    console.log(`BON DESTI disponible en http://127.0.0.1:${port}`);
    console.log('Presione Ctrl+C para detener el servidor.');
  });
}).catch(error => {
  console.error(error.message || error);
  process.exit(1);
});

const Hapi = require('hapi');
const Route = require('./route');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

server.route(Route);

server.start(() => {
  console.log('Server started at: ', server.info.uri);
});


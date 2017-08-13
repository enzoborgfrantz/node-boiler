import hapi, { Server } from 'hapi';
import routes from './routes/_routes';

const server = new Server();

server.connection({
  host: 'localhost',
  port: 8888
});

server.route(routes);

const startServer = () => server.start(() => console.log(`Server is running at ${server.info.uri}`));

export { startServer };

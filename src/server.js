import hapi from 'hapi';
import routes from './routes';

const server = hapi.server({
  host: 'localhost',
  port: 8888
})

server.route(routes);

const startServer = async () => {
  await server.start();
  console.log(`Server is running at ${server.info.uri}`);
}

export { startServer };

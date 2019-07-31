import fastify from './server';
import mongoose from 'mongoose';
import fastifySwagger from 'fastify-swagger';
import routes from './routes';
import swagger from './config/swagger';

fastify.register(fastifySwagger, swagger.options);

routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
    fastify.swagger();
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
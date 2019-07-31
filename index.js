import fastlify from './server';
import mongoose from 'mongoose';
import fastlifySwagger from 'fastify-swagger';
import routes from './routes';
import swagger from './config/swagger';

fastlify.register(fastlifySwagger, swagger.options);

routes.forEach((route, index) => {
  fastlify.route(route);
});

const start = async () => {
  try {
    await fastlify.listen(3000, '0.0.0.0');
    fastlify.swagger();
    fastlify.log.info(`Server listening on ${fastlify.server.address().port}`);
  } catch (error) {
    fastlify.log.error(error);
    process.exit(1);
  }
};

start();
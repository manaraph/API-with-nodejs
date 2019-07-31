const fastify = require('fastify')({logger: true});
import mongoose from 'mongoose';
import fastifySwagger from 'fastify-swagger';
import routes from './routes';
import swagger from './config/swagger';

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mygarage')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

fastify.register(fastifySwagger, swagger.options);

fastify.get('/', async(request, reply) => {
  return {hello: 'world'}
});

routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1)
  }
};

start();
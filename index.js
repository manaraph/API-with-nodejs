const fastlify = require('fastify')({logger: true});
import mongoose from 'mongoose';
import fastlifySwagger from 'fastify-swagger';
import routes from './routes';
import swagger from './config/swagger';

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mygarage')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

fastlify.register(fastlifySwagger, swagger.options);

fastlify.get('/', async(request, reply) => {
  return {hello: 'world'}
});

routes.forEach((route, index) => {
  fastlify.route(route);
});

const start = async () => {
  try {
    await fastlify.listen(3000);
    fastlify.swagger();
    fastlify.log.info(`Server listening on ${fastlify.server.address().port}`);
  } catch (error) {
    fastlify.log.error(error);
    process.exit(1)
  }
};

start();
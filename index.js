const fastlify = require('fastify')({logger: true});
const mongoose = require('mongoose');

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mygarage')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
fastlify.get('/', async(request, reply) => {
  return {hello: 'world'}
});

const start = async () => {
  try {
    await fastlify.listen(3000);
    fastlify.log.info(`Server listening on ${fastlify.server.address().port}`);
  } catch (error) {
    fastlify.log.error(error);
    process.exit(1)
  }
};

start();
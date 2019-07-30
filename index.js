const fastlify = require('fastify')({logger: true});

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
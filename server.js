const fastify = require('fastify')({ logger: true});
import mongoose from 'mongoose';

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mygarage', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default fastify;
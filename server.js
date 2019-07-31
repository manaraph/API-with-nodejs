const fastlify = require('fastify')({ logger: true});
import mongoose, { mongo } from 'mongoose';

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mygarage')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default fastlify;
import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const carSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: String,
  age: Number,
  owner_id: ObjectId
  // services: {
  //   type: Map, of: String
  // }
});

export default mongoose.model('Car', carSchema);

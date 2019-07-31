import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({
  car_id: ObjectId,
  name: String,
  date: String
});

export default mongoose.model('Service', serviceSchema);
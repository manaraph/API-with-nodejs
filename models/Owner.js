import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

export default mongoose.model('Owner', ownerSchema);

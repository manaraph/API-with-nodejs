const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mongoose will assign an id by default to all schemas
const PaintingSchema = new Schema({
    name: String,
    url: String,
    techniques: [String]
})

module.exports = mongoose.model('Painting', PaintingSchema);
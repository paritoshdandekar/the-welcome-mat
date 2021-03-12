const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internetSchema = new Schema({
    userId:{ type: String, required: true },
    specific: {type: String, required: false},
    status:{type: String, required: true },
    data:{},
}, {
    timestamps: true,
  });
  const Internet = mongoose.model('Internet', internetSchema);

module.exports = Internet;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{ type: String, required: true },
    checkin: {type: String, required: true},
    checkout:{type: String, required: true },
    room:{type: String, required: true},
}, {
    timestamps: true,
  });
  const User = mongoose.model('User', userSchema);

module.exports = User;
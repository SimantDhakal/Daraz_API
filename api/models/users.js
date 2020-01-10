const mongoose = require('mongoose');
const darazUsers = mongoose.Schema({
    phoneNo:String,
    password:String
});

module.exports = mongoose.model('daraz_user', darazUsers);
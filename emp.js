const mongoose = require("mongoose");

const schema = mongoose.Schema({
  std_id: String,
  name: String,
  email: String,
  phone_no: Number,
  gender: String,
  age:Number,
  password: String,
  branch: String,

});

const empModal = mongoose.model("", schema);

module.exports = empModal;

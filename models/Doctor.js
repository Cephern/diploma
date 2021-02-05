const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
});

module.exports = Doctor = mongoose.model("doctor", DoctorSchema);

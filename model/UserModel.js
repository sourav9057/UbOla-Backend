const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    require: true,
  },
  isMobileVerified: {
    type: String,
    default: "",
  },
  isEmailVerified: {
    type: String,
    default: "",
  },
  token: {
    type: String,
    default: "",
  },
  dateCreated: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);

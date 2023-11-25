const mongoose = require("mongoose");

const schemaData = mongoose.Schema(
  {
   name: String,
   email: String,
   age: String,
   gender: String,
   flatno: String,
   mobilenumber: String
  }
);

const userModel = mongoose.model("user", schemaData);

module.exports = userModel;
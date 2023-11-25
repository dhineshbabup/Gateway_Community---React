const mongoose = require("mongoose");
const schema = mongoose.Schema;

const formSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    mobilenumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    flatno: {
      type: String,
    },
  },
  {
    collection: "login",
  }
);

const userData = mongoose.model("FormData", formSchema);

module.exports = userData;

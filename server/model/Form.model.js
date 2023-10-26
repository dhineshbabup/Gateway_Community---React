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
      type: Number,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

const userData = mongoose.model("FormData", formSchema);

module.exports = userData;

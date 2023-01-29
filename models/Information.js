const { model, Schema } = require("mongoose");

const informationSchema = new Schema({
  username: String,
  email: String,
  adress: String,
  phone: String,
  gender: String,
});

module.exports = model("Information", informationSchema);

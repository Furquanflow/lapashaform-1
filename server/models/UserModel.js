// user.model.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    authName: { type: String, required: true },
    authEmail: { type: String, required: true },
    authPassword: { type: String, required: true }
  },
  { collection: "userData" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

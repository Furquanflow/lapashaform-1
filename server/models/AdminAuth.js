const mongoose = require("mongoose");

const adminData = new mongoose.Schema(
  {
    authAdminName: { type: String, required: true },
    authAdminEmail: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    authAdminPassword: { type: String, required: true }
  },
  { collection: "Admin-data" }
);

const adminModel = mongoose.model("AdminData", adminData);

module.exports = adminModel;

const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstname: { type: String },
    lastname: { type: String },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

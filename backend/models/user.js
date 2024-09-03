const mongoose = require("mongoose")
const { collection } = require("./album")

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    owned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
  },
  { timestamps: true },
  { collection: "users" }
)

const User = mongoose.model("User", userSchema)

module.exports = User

const mongoose = require("mongoose")
const { collection } = require("./album")

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

import monogoose from "mongoose";
let Schema = monogoose.Schema;
let userSchemal = new Schema({
  userName: String,
  gender: { type: String, default: "male" },
  phone: { type: Number, default: null },
  address: { type: String, defaultL: null },
  avatar: { type: String, default: "avata.default.jsgb" },
  role: { type: String, default: "user" },
  local: {
    email: { type: String, trim: true },
    password: String,
    isActive: { type: Boolean, default: false },
    verifyToken: { String }
  },
  facebook: {
    uid: String,
    token: String,
    email: {
      type: String, trim: true
    }
  },
  gooogle: {
    uid: String,
    token: String,
    email: {
      type: String, trim: true
    }
  },
  createAt: {
    type: Number,
    default: Date.now
  },
  updateAt: {
    type: Number,
    default: Date.now
  },
  deleteAt: {
    type: Number,
    default: Date.now
  }

});
module.exports = monogoose.model("user", userSchemal);
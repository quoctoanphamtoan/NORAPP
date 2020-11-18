import monogoose from "mongoose";
let Schema = monogoose.Schema;
import bcrypt from "bcrypt"
let userSchemal = new Schema({
  userName: String,
  gender: { type: String, default: "male" },
  phone: { type: String, default: null },
  address: { type: String, defaultL: null },
  avatar: { type: String, default: "avatar-default.jpg" },
  role: { type: String, default: "user" },
  local: {
    email: { type: String, trim: true },
    password: String,
    isActive: { type: Boolean, default: false },
    verifyToken: String,
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
    default: null
  },
  isAdmin: { type: Boolean, default: false }

});

userSchemal.statics = {
  createNew(item) {
    return this.create(item)
  },
  findByEmail(email) {
    return this.findOne({ "local.email": email }).exec();
  },
  removeByid(id) {
    return this.findByIdAndRemove(id).exec();
  },
  findByToken(token) {
    return this.findOne({ "local.verifyToken": token }).exec();
  },

  verify(token) {
    return this.findOneAndUpdate(
      {
        "local.verifyToken": token
      },
      {
        "local.isActive": true,
        "local.verifyToken": null
      }).exec();
  },
  findUserById(id) {
    return this.findById(id).exec();
  },
  updateUser(id, item) {
    return this.findByIdAndUpdate(id, item).exec();
  },
  updatePassword(id, hassedPassword) {
    return this.findByIdAndUpdate(id, { "local.password": hassedPassword }).exec();
  },
  //tim kiem tat ca ban be
  findAllForAddContact(deprecatedtUserIds, keyword) {
    return this.find({
      $and: [
        { "_id": { $nin: deprecatedtUserIds } },
        { "local.isActive": true },
        {
          $or: [
            { "userName": { "$regex": keyword } },
            { "local.email": { "$regex": keyword } },
          ]
        }
      ]
    }, { _id: 1, userName: 1, address: 1, avatar: 1 }).exec();

  }

};

userSchemal.methods = {
  comparepassword(password) {
    return bcrypt.compare(password, this.local.password);
  }
}
module.exports = monogoose.model("user", userSchemal);
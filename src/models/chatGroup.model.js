import monogoose from "mongoose";
let Schema = monogoose.Schema;
let chatGroupSchemal = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 100 },
  messagerAmount: { type: Number, default: 0 },
  userID: String,
  members: [
    { UserID: String },

  ],
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
module.exports = monogoose.model("messager", messagerSchemal); import monogoose from "mongoose";
let Schema = monogoose.Schema;
let messagerSchemal = new Schema({

  text: String,
  file: {
    data: Buffer, contentType: String, fileName: String
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
module.exports = monogoose.model("chatGroup", chatGroupSchemal);
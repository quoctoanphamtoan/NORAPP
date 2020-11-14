import monogoose from "mongoose";
let Schema = monogoose.Schema;
let messagerSchemal = new Schema({
  sender: {
    id: String,
    userName: String,
    avatar: String
  },
  receiver: {
    id: String,
    userName: String,
    avatar: String
  },
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
module.exports = monogoose.model("messager", messagerSchemal);
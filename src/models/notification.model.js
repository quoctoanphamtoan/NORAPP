import monogoose from "mongoose";
let Schema = monogoose.Schema;
let notificationSchema = new Schema({
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

  type: String,
  content: String,
  isRead: { type: Boolean, default: false },
  file: {
    data: Buffer, contentType: String, fileName: String
  },

  createAt: {
    type: Number,
    default: Date.now
  },


});
module.exports = monogoose.model("notification", notificationSchema);
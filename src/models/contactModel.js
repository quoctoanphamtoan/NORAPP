import monogoose from "mongoose";
let Schema = monogoose.Schema;
let contactSchemal = new Schema({
  userID: String,
  contact: String,
  status: { type: Boolean, default: false },
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

contactSchemal.statics = {
  createNew(item) {
    return this.create(item)
  }
};

module.exports = monogoose.model("contact", contactSchemal);
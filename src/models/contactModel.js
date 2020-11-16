import monogoose from "mongoose";
let Schema = monogoose.Schema;
let contactSchemal = new Schema({
  userID: String,
  contactID: String,
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
  },
  //tim kiem item lien quan den
  findAllByUser(userid) {
    return this.find({
      $or: [
        { "userID": userid },
        { "contactID": userid }
      ]
    });
  }

};

module.exports = monogoose.model("contact", contactSchemal);
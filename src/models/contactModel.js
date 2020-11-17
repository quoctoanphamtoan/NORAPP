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
    }).exec();
  },
  checkExits(userid, contactid) {
    return this.findOne({
      $or: [
        {
          $and: [
            { "userID": userid },
            { "contactID": contactid }
          ]
        },
        {
          $and: [
            { userid: "userID" },
            { contactid: 'contactID' }
          ]
        }
      ]
    }).exec();
  },
  removeRequest(userid, contacid) {
    return this.remove({
      $and: [
        { "userID": userid },
        { "contactID": contacid }
      ]
    }).exec();
  }

};

module.exports = monogoose.model("contact", contactSchemal);
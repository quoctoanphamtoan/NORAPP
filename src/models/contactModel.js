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
  approveRequestReceived(userid, contacid) {
    return this.update({
      $and: [
        { "contactID": userid },
        { "userID": contacid },
        { "status": false }
      ]
    },
      { "status": true }
    ).exec();
  },
  removeRequest(userid, contacid) {
    return this.remove({
      $and: [
        { "userID": userid },
        { "contactID": contacid },
        { "status": false }
      ]
    }).exec();
  },



  removeRequestReceived(userid, contacid) {
    return this.remove({
      $and: [
        { "contactID": userid },
        { "userID": contacid },
        { "status": false }
      ]
    }).exec();
  },


  getContact(userid, limit) {
    return this.find({
      $and: [
        {
          $or: [
            { "userID": userid },
            { "contactID": userid }
          ]
        },
        { "status": true }
      ]
    }).sort({ "createAt": -1 }).limit(limit).exec();
  },
  contastSent(userid, limit) {
    return this.find({
      $and: [
        { "userID": userid },
        { "status": false }
      ]
    }).sort({ "createAt": -1 }).limit(limit).exec();
  },
  contastRecived(userid, limit) {
    return this.find({
      $and: [
        { "contactID": userid },
        { "status": false }
      ]
    }).sort({ "createAt": -1 }).limit(limit).exec();
  },


  countContast(userid) {
    return this.countDocuments({
      $and: [
        {
          $or: [
            { "userID": userid },
            { "contactID": userid }
          ]
        },
        { "status": true }
      ]
    }).exec();
  },
  countContastSent(userid) {
    return this.countDocuments({
      $and: [
        {
          $or: [
            { "userID": userid },
          ]
        },
        { "status": false }
      ]
    }).exec();
  },
  countContastRecived(userid) {
    return this.countDocuments({
      $and: [
        { "contactID": userid },
        { "status": false }
      ]
    }).exec();
  },

};

module.exports = monogoose.model("contact", contactSchemal);
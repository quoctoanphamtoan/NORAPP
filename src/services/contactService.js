import contactModel from "./../models/contactModel";
import userModel from "./../models/userModel";
import _ from "lodash";
let findUsersContactSV = (currentUserId, keyword) => {
  return new Promise(async (resolve, reject) => {
    let deprecatedtUserIds = [currentUserId];//loai id ko dung
    let contactsByuser = await contactModel.findAllByUser(currentUserId);
    contactsByuser.forEach((contact) => {
      deprecatedtUserIds.push(contact.userID);
      deprecatedtUserIds.push(contact.contactID);

    });
    deprecatedtUserIds = _.uniqBy(deprecatedtUserIds);
    let users = await userModel.findAllForAddContact(deprecatedtUserIds, keyword);
    // console.log(users);
    resolve(users);
  });

}
let addNewSV = (currentUserId, contactId) => {
  return new Promise(async (resolve, reject) => {
    let contactExist = await contactModel.checkExits(currentUserId, contactId);
    if (contactExist) {
      return reject(false);
    }
    let newContactItem = {
      userID: currentUserId,
      contactID: contactId
    };
    let newContact = await contactModel.createNew(newContactItem);
    resolve(newContact)
  })


}
let removeSV = (currentUserId, contactId) => {
  return new Promise(async (resolve, reject) => {
    let remove = await contactModel.removeRequest(currentUserId, contactId);
    // console.log(remove.result);
    if (remove.result.n == 0) {
      return reject(false);
    }
    resolve(true);
  })


}
module.exports = {
  findUsersContactSV: findUsersContactSV,
  addNewSV: addNewSV,
  removeSV: removeSV
  // addNews: addNews,


}
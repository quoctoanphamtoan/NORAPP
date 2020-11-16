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
    resolve(users);
  });

}
// let addNews = async (currentUserId, contactId) => {
//   return new Promise(async (resolve, reject) => {
//     let contactExits = await contactModel.checkExists(currentUserId, contactId);
//     if (contactExits) {
//       return reject(false);
//     }
//     let newcontactItem = {
//       userID: currentUserId,
//       contactID: contactId
//     };
//     let newcontact = await contactModel.createNew(newcontactItem);
//     resole(newcontact);
//   })


// }
module.exports = {
  findUsersContactSV: findUsersContactSV,
  // addNews: addNews

}
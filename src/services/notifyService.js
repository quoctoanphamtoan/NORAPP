import notificationModel from "./../models/notificationModel";
import userModel from "./../models/userModel";
let getNotifycations = (currentUserId, limit = 10) => {
  return new Promise(async (resolve, reject) => {
    try {
      let notifycations = await notificationModel.model.getByUserIdAndLimit(currentUserId, limit);
      // console.log(notifycations);
      let getNotifContents = notifycations.map(async (noti) => {
        let sender = await userModel.findUserById(noti._doc.senderId);
        return notificationModel.conten.getContent(noti._doc.type, noti._doc.isRead, sender._id, sender.userName, sender.avatar);
      });
      resolve(await Promise.all(getNotifContents));
    } catch (error) {
      reject(error)
    }
  })
};
let countUnread = (currentUserId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let countNotif = await notificationModel.model.countUnread(currentUserId);
      resolve(countNotif)
    } catch (error) {
      reject(error)
    }
  })
};


module.exports = {
  getNotifycations: getNotifycations,
  countUnread: countUnread
}
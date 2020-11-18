import { getNotifycations, countUnread } from "./../services/notifyService"
let getHomeRegister = async (req, res) => {

  let notifycations = await getNotifycations(req.user._id);

  let countNotifUnRead = await countUnread(req.user._id);
  return res.render("main/home/home", {
    errors: req.flash("errors"),
    success: req.flash("success"),
    user: req.user,
    notifycations: notifycations,
    countNotifUnRead: countNotifUnRead

  });
}
module.exports = getHomeRegister;




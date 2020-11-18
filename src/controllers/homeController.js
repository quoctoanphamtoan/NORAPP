import { getNotifycations, countUnread } from "./../services/notifyService";
import { getContact, getcontastSent, getcontastRecived, countContast, countContastRecived, countContastSent } from "./../services/contactService";




let getHomeRegister = async (req, res) => {
  let notifycations = await getNotifycations(req.user._id);
  let contast = await getContact(req.user._id);
  let contastSent = await getcontastSent(req.user._id);
  let contastRecived = await getcontastRecived(req.user._id);



  let countContact = await countContast(req.user._id);
  let countContastSents = await countContastSent(req.user._id);
  let countContastReciveds = await countContastRecived(req.user._id);

  let countNotifUnRead = await countUnread(req.user._id);
  return res.render("main/home/home", {
    errors: req.flash("errors"),
    success: req.flash("success"),
    user: req.user,
    notifycations: notifycations,
    countNotifUnRead: countNotifUnRead,
    contast: contast,
    contastSent: contastSent,
    contastRecived: contastRecived,
    countContast: countContact,
    countContastSent: countContastSents,
    countContastRecived: countContastReciveds
  });
}
module.exports = getHomeRegister;




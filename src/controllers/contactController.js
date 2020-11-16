import { findUsersContactSV } from "./../services/contactService";

let findUsersContact = async (req, res) => {
  try {
    let currentUserId = req.user._id;
    let keyword = req.params.keyword;

    let Users = await findUsersContactSV(currentUserId, keyword);

    // console.log(Users);
    return res.render("main/contact/section/_findUsersContact", { Users });

  } catch (error) {
    return res.status(500).send(error);
  }

}
module.exports = {
  findUsersContact: findUsersContact,


}
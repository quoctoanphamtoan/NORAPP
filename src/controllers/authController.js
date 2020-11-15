import { validationResult } from "express-validator/check"
import { auth } from "./../services/index";
let getLoginRegister = (req, res) => {
  return res.render("auth/master", {
    errors: req.flash("errors"),
    success: req.flash("success")

  });
};
let postRegister = async (req, res) => {
  let errosArr = [];
  let successArr = [];

  let validationErros = validationResult(req)
  if (!validationErros.isEmpty()) {
    let errors = Object.values(validationErros.mapped());

    errors.forEach((err) => {
      errosArr.push(err.msg)
    })
    req.flash("errors", errosArr)
    return res.redirect("/login-register");
  }
  try {
    let createUserSuccsess = await auth.register(req.body.email, req.body.gender, req.body.password);
    successArr.push(createUserSuccsess);
    req.flash("success", successArr);
    return res.redirect("/login-register");
  } catch (error) {
    errosArr.push(error);
    req.flash("errors", errosArr)
    return res.redirect("/login-register");
  }

  // console.log(req.body);

}
module.exports = {
  getLoginRegister: getLoginRegister,
  postRegister: postRegister
};
import passport, { use } from "passport";
import passportLocal from "passport-local";
import userModel from "./../../models/userModel";
import { transErrors, transSuccess } from "./../../../lang/vi"
import { check } from "express-validator/check";
let LocalStratery = passportLocal.Strategy;


//kiemtra
let initPassportLocal = () => {
  passport.use(new LocalStratery({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
      let user = await userModel.findByEmail(email);
      if (!user) {
        return done(null, false, req.flash("errors", transErrors.login_false));
      }
      if (!user.local.isActive) {
        return done(null, false, req.flash("errors", transErrors.acount_not_active));
      }
      let checkpass = await user.comparepassword(password);
      if (!checkpass) {
        return done(null, false, req.flash("errors", transErrors.login_false));
      }
      if (user.isAdmin) {
        return done(null, user, req.flash("success", transSuccess.login_true(user.userName)));
      }
      return done(null, user, req.flash("success", transSuccess.login_true(user.userName)));
    } catch (error) {
      // return done(null, false, req.flash("errors", transErrors.login_false));
      console.log(error);
      return done(null, false, req.flash("errros", transErrors.server_err));
    }
  }));
  //luuvao secsion


  passport.serializeUser((user, done) => {
    done(null, user._id);
  });


  passport.deserializeUser((id, done) => {
    userModel.findUserById(id).then(
      user => {
        return done(null, user)
      }
    ).catch(err => {
      return done(err, null);

    });
  })
};

module.exports = initPassportLocal;
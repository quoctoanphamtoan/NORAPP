import express from "express";
import { getLoginRegister, postRegister } from "./../controllers/authController";
import homeController from "./../controllers/homeController";
import { auValid } from "../../src/validation/index"
let router = express.Router();

let initRoutes = (app) => {
  router.get("/", homeController);
  router.get("/login-register", getLoginRegister)
  router.post("/register", auValid.register, postRegister)
  return app.use("/", router);
}
module.exports = initRoutes;
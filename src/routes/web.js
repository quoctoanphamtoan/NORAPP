import express from "express";
import authController from "./../controllers/authController";
import homeController from "./../controllers/homeController";
let router = express.Router();

let initRoutes = (app) => {
  router.get("/", homeController);

  router.get("/login-register", authController)
  return app.use("/", router);
}
module.exports = initRoutes;
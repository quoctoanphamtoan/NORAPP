import Session from "express-session";
import connectMongo from "connect-mongo";
// import { param } from "express-validator/check";
let MongoStore = connectMongo(Session);

// let DB_CONNECTION = "mongodb";
// let DB_HOST = "localhost";
// let DB_PORT = 27017;
// let DB_NAME = "NORAPP";
// let DB_USERNAME = "";
// let DB_PASSWORD = "";
// let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let sessionStore = new MongoStore({
  url: `mongodb://localhost:27017/NORAPP`,
  autoReconnect: true,
  // autoRemove: "native"

});
// /**
//  * 
//  * @param app 
//  */
let configSession = (app) => {
  app.use(Session({
    key: "express.sid",
    secret: "mySecret",
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  }));
};
module.exports = configSession;
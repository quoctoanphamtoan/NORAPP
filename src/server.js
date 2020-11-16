import express from "express"
import connectDB from "./config/connectDB"
import ContacModel from "./models/contactModel";
import configviewEngine from "./config/viewsEgine";
import initRoutes from "./routes/web";
import bodyparser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/sessions"
import passport from "passport";

let app = express();

connectDB();
configSession(app);
configviewEngine(app);

app.use(bodyparser.urlencoded({ extended: true }));

app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());

let port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('err: ' + err);

  } else {
    console.log('server running port: ' + port);
  }

})
initRoutes(app);
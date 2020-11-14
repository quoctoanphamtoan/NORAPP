// console.log('chao tui mat loln'


import express from "express"
import connectDB from "./config/connectDB"
import ContacModel from "./models/contact.model";
import configviewEngine from "./config/viewsEgine";
import initRoutes from "./routes/web"
let app = express();

connectDB();
configviewEngine(app);


let port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('err: ' + err);

  } else {
    console.log('server running port: ' + port);
  }

})
initRoutes(app);
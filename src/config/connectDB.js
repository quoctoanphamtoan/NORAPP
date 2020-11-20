import mongoose from "mongoose";
// import blubird from "bluebird";

// let connectDB = () => {
//   mongoose.Promise = blubird;

//   let DB_CONNECTION = "mongodb";
//   let DB_HOST = "localhost";
//   let DB_PORT = 27017;
//   let DB_NAME = "NORAPP";
//   let DB_USERNAME = "";
//   let DB_PASSWORD = "";
//   let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
//   // let URL = `mongodb+srv://admin:${DB_PASSWORD}@norapp.ws6op.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

//   return mongoose.connect(URI, { useMongoClient: true });

// };
// module.exports = connectDB;

const mongooes = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");

const url = "mongodb+srv://zalozalo:963852741@cluster0.tnqmv.mongodb.net/muoidiemmuoi?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongooes.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("connect DB")
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
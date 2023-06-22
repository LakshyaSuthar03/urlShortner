// const connection = mongoose
//   .connect("mongodb://localhost:27017/urlshortner")
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const mongoose = require("mongoose");

const url = process.env.URI;

const connectionParams = {
  useNewUrlParser: true,

  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

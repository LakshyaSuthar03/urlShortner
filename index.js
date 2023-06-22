const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const urlRoute = require("./routes/urlRoute");
const redirectRout = require("./controllers/redirectController");
require("dotenv").config();
require("./database/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/", urlRoute);
app.use("/:shortenedId", redirectRout);
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

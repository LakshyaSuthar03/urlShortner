const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const urlRoute = require("./routes/urlRoute");
// const redirectRoute = require("./routes/redirectRoute");
const redirectController = require("./controllers/redirectController");
const qrcodeRoute = require("./routes/qrcodeRoute");
require("dotenv").config();
require("./database/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/", urlRoute);
app.use("/qrcode", qrcodeRoute);
app.use("/api/:shortenedId", redirectController);
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

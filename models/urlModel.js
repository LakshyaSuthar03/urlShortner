const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, require: true },
  shortenedUrl: { type: String, require: true },
});

const urlModel = mongoose.model("urlModel", urlSchema);
module.exports = urlModel;

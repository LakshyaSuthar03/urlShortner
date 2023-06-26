const urlModel = require("../models/urlModel");
const redirectController = async (req, res) => {
  const shortenedId = req.params.shortenedId;
  const entry = await urlModel.findOne({ shortenedUrl: shortenedId });
  if (entry.originalUrl.includes("https://")) {
    res.redirect(entry.originalUrl);
  } else {
    res.redirect(`https://${entry.originalUrl}`);
  }
};
module.exports = redirectController;

const shortid = require("shortid");
const urlModel = require("../models/urlModel");

const urlControllerPost = async (req, res) => {
  const shortId = shortid.generate(8);
  await urlModel.create({
    originalUrl: req.body.originalUrl,
    shortenedUrl: shortId,
  });
  return res.status(200).json({ id: shortId });
};
const urlControllerGet = async (req, res) => {
  res.render("index");
};

module.exports = { urlControllerPost, urlControllerGet };

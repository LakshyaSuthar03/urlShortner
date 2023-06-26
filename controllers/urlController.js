const shortid = require("shortid");
const urlModel = require("../models/urlModel");
const urlControllerPost = async (req, res) => {
  const alias = req.body.alias;
  const checkAliasPresentInDB = await urlModel.findOne({ shortenedUrl: alias });
  if (checkAliasPresentInDB) {
    return res.status(200).json({ error: "Alias already taken!" });
  }
  if (alias) {
    const alias = req.body.alias;
    await urlModel.create({
      originalUrl: req.body.originalUrl,
      shortenedUrl: alias,
    });
    return res.status(200).json({ id: alias });
  } else {
    const shortId = shortid.generate(8);
    await urlModel.create({
      originalUrl: req.body.originalUrl,
      shortenedUrl: shortId,
    });
    return res.status(200).json({ id: shortId });
  }
};
const urlControllerGet = async (req, res) => {
  res.render("index");
};

module.exports = { urlControllerPost, urlControllerGet };

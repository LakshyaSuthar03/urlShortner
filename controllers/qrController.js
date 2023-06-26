const qrControllerGet = async (req, res) => {
  res.render("qrcode");
};
const qrControllerPost = async (req, res) => {
  const generatedSvg = generateQr(req.body.qrUrl);
  res.status(200).json({ generatedQr: generatedSvg });
};
function generateQr(qrUrl) {
  const QRCode = require("qrcode");

  const data = QRCode.toString(
    `${qrUrl}`,
    {
      errorCorrectionLevel: "H",
      type: "svg",
    },
    function (err, data) {
      if (err) throw err;
      return data;
    }
  );
  return data;
}
module.exports = { qrControllerGet, qrControllerPost };

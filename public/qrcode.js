const qrForm = document.getElementById("qrForm");

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/qrcode", {
      qrUrl: qrForm.qrUrl.value,
    })
    .then(function (response) {
      const generatedQrDisplay = document.getElementById("generatedQrDisplay");
      generatedQrDisplay.innerHTML = response.data.generatedQr;
    })
    .catch(function (error) {
      console.log(error);
    });
});

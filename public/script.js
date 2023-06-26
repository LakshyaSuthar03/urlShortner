const form = document.getElementById("form");
const displayUrlInput = document.getElementById("displayUrlInput");
const copyToClipboard = document.getElementById("copyToClipboard");
const errorDialogBox = document.getElementById("errorDialogBox");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/", {
      originalUrl: form.originalUrl.value,
      alias: form.alias.value,
    })
    .then(function (response) {
      if (response.data.error) {
        errorDialogBox.innerText = response.data.error;
      } else {
        const displayFormat = `http://localhost:3000/api/${response.data.id}`;
        displayUrlInput.value = displayFormat;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
copyToClipboard.addEventListener("click", () => {
  displayUrlInput.select();
  displayUrlInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(displayUrlInput.value);
  alert("Copied");
});

const form = document.getElementById("form");
const displayUrlInput = document.getElementById("displayUrlInput");
const copyToClipboard = document.getElementById("copyToClipboard");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/", {
      originalUrl: form.originalUrl.value,
    })
    .then(function (response) {
      const displayFormat = `http://localhost:3000/${response.data.id}`;
      displayUrlInput.value = displayFormat;
      console.log(response);
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

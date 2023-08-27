
const letters = "abcdefghijklmnopqrustvwxyz";
const numbers = "123456789";
// const renderPanel = document.querySelector(".render-panel");
let inputUrl = [];
let outputUrl = [];
let inputValue = "";

function addRandomLetters(url) {
  if (inputUrl.indexOf(url) === -1) {
    let fiveLetters = "";
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 26);
      fiveLetters += letters[index];
    }
    inputUrl.push(url);
    outputUrl.push(`http://localhost:3000/${fiveLetters}`);
    return `http://localhost:3000/${fiveLetters}`;
  } else {
    let i = inputUrl.indexOf(url);
    return outputUrl[i];
  }
}

function renderSuccess(url) {
  let htmlContent = `
  <h2 class="mt-3">Success! Please use this link:</h2>
  <a class="mb-3 text-center" href="${url}">${url}</a>
  <button type="button" class="btn btn-primary" id="btn-copy">Copy</button>
  `;
  $("#success").html(htmlContent);
}

$(document).ready(function () {
  $("#render-panel").on("input", "#input-url", function () {
    inputValue = $(this).val();
  });
});

$(document).ready(function () {
  $("#render-panel").on("click", "#btn-shorten", function () {
      let url = addRandomLetters(inputValue);
      renderSuccess(url);
  });
});

// renderPanel.addEventListener("input", (event) => {
//   inputValue = event.target.value;
// });

// renderPanel.addEventListener("click", (event) => {
//   if (event.target.id === "btn-shorten") {
//     let url = addRandomLetters(inputValue);
//     renderSuccess(url);
//     alert(inputUrl);
//   } else if (event.target.id === "btn-copy") {
//     alert("copy");
//   }
// });

// module.exports = {
//   inputUrl: inputUrl,
//   outputUrl: outputUrl,
// };

window.inputUrl = inputUrl
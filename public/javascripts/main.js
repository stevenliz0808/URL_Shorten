const letters = "abcdefghijklmnopqrustvwxyz";
const numbers = "123456789";
const btnShorten = document.querySelector("#btn-shorten");
const formControl = document.querySelector(".form-control");
const renderPanel = document.querySelector(".render-panel");
const btnCopy = document.querySelector("#btn-copy");

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
  renderPanel.innerHTML = `
  <input
  type="text"
  class="form-control mb-3"
  placeholder="Input URL here"
  aria-label="Input URL here"
  aria-describedby="button-addon2"
/>
<button
  class="btn btn-outline-primary w-100"
  type="button"
  id="btn-shorten"
>Shorten</button>
  <h2 class="mt-3">Success! Please use this link:</h2>
  <a class="mb-3" href="${url}">${url}</a>
  <button type="button" class="btn btn-primary" id="btn-copy">Copy</button>`;
}

renderPanel.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

renderPanel.addEventListener("click", (event) => {
  if (event.target.id === "btn-shorten") {
    let url = addRandomLetters(inputValue);
    renderSuccess(url);
    alert(outputUrl);
  } else if (event.target.id === "btn-copy") {
    alert("copy");
  }
});

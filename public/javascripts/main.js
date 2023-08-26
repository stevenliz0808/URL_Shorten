const letters = "abcdefghijklmnopqrustvwxyz";
const numbers = "123456789";
const btnShorten = document.querySelector("#btn-shorten");
const formControl = document.querySelector(".form-control");
const renderList = document.querySelector(".render-list")
const btnCopy = document.querySelector("#btn-copy");

let inputUrl = [];
let outputUrl = [];

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
  }

  else {
    let i = inputUrl.indexOf(url)
    return outputUrl[i]
  }
}

function renderSuccess() {
  let renderList.innerHTML = `
  <h2>Success! Please use this link:</h2>
  <a class="mb-3" href="https://www.youtube.com/">https://www.youtube.com/</a>
  <button type="button" class="btn btn-primary" id="btn-copy">Copy</button>`
}
btnShorten.addEventListener('click', () => {
  console.log("shorten");
  addRandomLetters(formControl.value);
});

btnCopy.addEventListener('click', () => {
  console.log('copy')
})
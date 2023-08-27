// const renderPanel = document.querySelector(".render-panel");

let inputUrl = [];
let outputUrl = [];
let inputValue = "";

function addRandomLetters(url) {
  const letters = "abcdefghijklmnopqrustvwxyz123456789";
  //輸入相同網址時，產生一樣的縮址
  if (inputUrl.indexOf(url) === -1) {
    let fiveLetters = "";
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 35);
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
  let i = outputUrl.indexOf(url);
  let htmlContent = `
  <h2 class="mt-3">Success! Please use this link:</h2>
  <a id="textToCopy" class="mb-3 text-center" href="${inputUrl[i]}">${url}</a>
  <button type="button" class="btn btn-primary" id="btn-copy" data-clipboard-target="#textToCopy">Copy</button>
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
    //防止空白表單送出並提示使用者
    if (inputValue) {
      renderSuccess(url);
    } else {
      alert("Please enter the url");
    }

    // const dataToSend = {
    //   name: "John",
    //   age: 30,
    //   city: "New York",
    // };
    // fetch("/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataToSend),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Response from backend:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  });
});

new ClipboardJS("#btn-copy");
$(document).ready(function () {
  $("#render-panel").on("click", "#btn-copy", function () {
    alert(`copy successfully`);
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

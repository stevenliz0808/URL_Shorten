let inputValue = "";

$(document).ready(function () {
  $("#render-panel").on("input", "#input-url", function () {
    inputValue = $(this).val();
  });
});

$(document).ready(function () {
  $("#render-panel").on("click", "#btn-shorten", function () {
    //防止空白表單送出並提示使用者
    if (!inputValue) {
      alert("Please enter the url");
    }
  });
});

new ClipboardJS("#btn-copy");
$(document).ready(function () {
  $("#render-panel").on("click", "#btn-copy", function () {
    alert(`copy successfully`);
  });
});

// const renderPanel = document.querySelector(".render-panel");

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

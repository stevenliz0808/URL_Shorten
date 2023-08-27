const express = require("express");
const { engine } = require("express-handlebars");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

let inputUrl = [];
let outputUrl = [];

app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/result", (req, res) => {
  const url = req.query.inputText;
  const letters = "abcdefghijklmnopqrustvwxyz123456789";
  let shortenUrl = "http://localhost:3000/";
  //避免空白
  if (!url) {
    res.redirect("/");
  }

  else {
    const i = inputUrl.indexOf(url);
    //新的網址
    if (i === -1) {
      let fiveLetters = "";
      for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * 35);
        fiveLetters += letters[index];
      }
      shortenUrl += fiveLetters;
      inputUrl.push(url);
      outputUrl.push(shortenUrl);
      res.render("success", { shortenUrl });
    }
    //舊的網址
    else {
      shortenUrl = outputUrl[i]
      res.render("success", { shortenUrl });
    }

    console.log(inputUrl);
    console.log(outputUrl);
  }
});

app.get("/:id", (req, res) => {
  let url = "http://localhost:3000/";
  const id = req.params.id;
  url += id
  let i = outputUrl.indexOf(url)
  res.redirect(inputUrl[i]);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

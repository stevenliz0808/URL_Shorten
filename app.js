const express = require("express");
const { engine } = require("express-handlebars");
const { JSDOM } = require("jsdom");
const fs = require("fs"); 
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/:id", (req, res) => {
  const dom = new JSDOM(
    fs.readFileSync(path.join(__dirname, "public", "javascripts", "main.js"), "utf8"),
    {
      runScripts: "dangerously",
    }
  );

  const window = dom.window;
  const $ = require("jquery")(window);

  const id = req.params.id;
  console.log(window.inputUrl);
  // const inputUrl = urlArrays.inputUrl
  // const outputUrl = urlArrays.outputUrl
  res.send(id);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

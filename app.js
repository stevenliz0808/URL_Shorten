const express = require("express");
const { engine } = require("express-handlebars");
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
  const id = req.params.id;
  res.redirect("https://www.google.com");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

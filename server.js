// server.js
__path = process.cwd();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var mainrouter = require("./routes/main.js"),
  apirouter = require("./routes/api.js");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.json());

//main
app.use("/", mainrouter);
app.use("/api", apirouter);

//blogg
app.use("/pariwisata/js", express.static("public/js"));
app.use("/pariwisata/css", express.static("public/css"));
app.use("/pariwisata/fonts", express.static("public/fonts"));
app.use("/pariwisata/images", express.static("public/images"));
app.use(function (req, res, next) {
  res.status(404).render("404", { nav: '404' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
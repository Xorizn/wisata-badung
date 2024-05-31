// server.js
__path = process.cwd();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var mainrouter = require("./routes/main.js"),
  apirouter = require("./routes/api.js");

const PORT = process.env.PORT || 8080 || 5000 || 3000;
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
app.use("/penginapan/js", express.static("public/js"));
app.use("/penginapan/css", express.static("public/css"));
app.use("/penginapan/fonts", express.static("public/fonts"));
app.use("/penginapan/images", express.static("public/images"));
app.use("/restoran/js", express.static("public/js"));
app.use("/restoran/css", express.static("public/css"));
app.use("/restoran/fonts", express.static("public/fonts"));
app.use("/restoran/images", express.static("public/images"));
app.use(function (req, res, next) {
  res.status(404).render("404", { nav: '404' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
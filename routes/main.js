__path = process.cwd();

var express = require("express");
var router = express.Router();
var { data_galery } = require("../config");
var { data, datas } = require("../data");

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

router.get("/", (req, res) => {
  const topRatedWisatas = data.sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
  );
  const rating_tinggi = topRatedWisatas.slice(0, 3);
  const data_home = datas.slice(0, 10);

  res.render("index", { nav: "/", rating_tinggi, data_home });
});
router.get("/wisata-detail", (req, res) => {
  res.render("wisata-detail", { nav: "/" });
});
router.get("/gallery", (req, res) => {
  res.render("gallery", { nav: "gallery", data_galery });
});
router.get("/about", (req, res) => {
  res.render("about", { nav: "about" });
});

router.get("/pariwisata", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};
  if (endIndex < data.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = data.slice(startIndex, endIndex);
  res.render("wisatas", {
    wisatas: results.results,
    next: results.next,
    previous: results.previous,
    nav: "pariwisata",
  });
});

router.get("/pariwisata/:slug", (req, res) => {
  const wisataSlug = req.params.slug;
  const wisata = data.find((w) => createSlug(w.title) === wisataSlug);
  if (wisata) {
    res.render("wisata-detail", { wisata, nav: "pariwisata" });
  } else {
    res.status(404).render("404", { nav: "pariwisata" });
  }
});

module.exports = router;

__path = process.cwd();

var express = require("express");
var router = express.Router();
var { data_galery, penginapan, restoran } = require("../config");
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

  const bar = restoran.slice(0, 3);
  const ber = penginapan.slice(0, 3);

  res.render("index", {
    nav: "/",
    rating_tinggi,
    data_home,
    data,
    restoran: bar,
    penginapan: ber,
  });
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

// router.get("/pariwisata", (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = 10;
//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;

//   const results = {};
//   if (endIndex < data.length) {
//     results.next = {
//       page: page + 1,
//       limit: limit,
//     };
//   }
//   if (startIndex > 0) {
//     results.previous = {
//       page: page - 1,
//       limit: limit,
//     };
//   }
//   results.results = data.slice(startIndex, endIndex);
//   res.render("wisatas", {
//     wisatas: results.results,
//     next: results.next,
//     previous: results.previous,
//     nav: "pariwisata",
//   });
// });

router.get("/pariwisata", (req, res) => {
  const { search, page = 1 } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  if (search) {
    // Filter data berdasarkan query pencarian
    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
    );

    res.render("data_search", {
      wisatas: filteredData,
      nav: "pariwisata",
    });
  } else {
    const results = {};
    if (endIndex < data.length) {
      results.next = {
        page: parseInt(page) + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: parseInt(page) - 1,
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
  }
});

router.get("/penginapan", (req, res) => {
  const { search, page = 1 } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};
  if (endIndex < penginapan.length) {
    results.next = {
      page: parseInt(page) + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: parseInt(page) - 1,
      limit: limit,
    };
  }
  results.results = penginapan.slice(startIndex, endIndex);
  res.render("hotel", {
    wisatas: results.results,
    next: results.next,
    previous: results.previous,
    nav: "penginapan",
  });
});

router.get("/restoran", (req, res) => {
  const { search, page = 1 } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};
  if (endIndex < restoran.length) {
    results.next = {
      page: parseInt(page) + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: parseInt(page) - 1,
      limit: limit,
    };
  }
  results.results = restoran.slice(startIndex, endIndex);
  res.render("restoran", {
    wisatas: results.results,
    next: results.next,
    previous: results.previous,
    nav: "restoran",
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
router.get("/penginapan/:slug", (req, res) => {
  const wisataSlug = req.params.slug;
  const wisata = penginapan.find((w) => createSlug(w.nama) === wisataSlug);
  if (wisata) {
    res.render("hotel-detail", { wisata, nav: "penginapan" });
  } else {
    res.status(404).render("404", { nav: "penginapan" });
  }
});
router.get("/restoran/:slug", (req, res) => {
  const wisataSlug = req.params.slug;
  const wisata = restoran.find((w) => createSlug(w.nama) === wisataSlug);
  if (wisata) {
    res.render("restoran-detail", { wisata, nav: "restoran" });
  } else {
    res.status(404).render("404", { nav: "restoran" });
  }
});

module.exports = router;

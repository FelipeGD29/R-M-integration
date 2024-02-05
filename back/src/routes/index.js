const express = require("express");
const router = express.Router();
const { getCharById } = require("./../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/postFav");

router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = {
  router,
};

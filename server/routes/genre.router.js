const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  // Add query to get all genres
  res.sendStatus(500);
});

// This query gets all of the genres from the movie you clicked
router.get("/:id", (req, res) => {
  console.log("hello from genre request!", req.params.id);
  const queryText = `SELECT "genres"."name" FROM "movies"
JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
WHERE "movie_id" = $1`;
  //provides sanitization
  let id = req.params.id;
  pool
    .query(queryText, [id])
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Getting the genres", err);
      res.sendStatus(500);
    });
});

module.exports = router;

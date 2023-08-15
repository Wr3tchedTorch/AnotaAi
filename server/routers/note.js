const express = require("express");
const router = express.Router();
const Database = require("../database/mysql");

const db = new Database("notes");

router.route("/").post((req, res) => {
  const { title, desc } = req.body;
  db.insert(`'${title}', '${desc}'`)
    .then((rows) => {
      res.send({ db: rows });
    })
    .catch((err) => {
      throw err;
    });
});

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const where = id == "all" ? "" : `id = ${id}`;
    db.select(where)
      .then((rows) => {
        res.status(200).send({ db: rows });
      })
      .catch((err) => {
        throw err;
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    db.delete(`id = ${id}`)
      .then((rows) => {
        res.send({ db: rows });
      })
      .catch((err) => {
        throw err;
      });
  });
module.exports = router;

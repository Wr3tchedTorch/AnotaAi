const express = require("express");
const router = express.Router();
const connection = require("../database/mysql");

router
  .route("/")
  .post((req, res) => {
    const { title, desc } = req.body;
    res.send({ title: title, desc: desc });

    connection.query(
      `INSERT INTO notes(title, description) VALUES ('${title}', '${desc}')`,
      (err, rows, fields) => {
        if (err) throw err;

        console.log(rows);
      }
    );
  })
  .delete((req, res) => {
    res.send("Delete Note");
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ params: id });
});
module.exports = router;

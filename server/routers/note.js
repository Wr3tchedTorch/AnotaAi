const express = require("express");
const Filter = require("bad-words-br");
const router = express.Router();
const { notes } = require("../sequelize/models");

router.route("/").post(async (req, res) => {
  const { title, desc, date } = req.body;

  const filter = new Filter();
  const extraWords = require("../bad_words/bad_words.json");
  filter.addWords(...extraWords);
  filter.removeWords("descubra");
  filter.removeWords("coisas");

  const creatingUser = await notes.create({
    title: filter.clean(title),
    description: filter.clean(desc),
    date: date,
  });

  res.send("Id do usuário criado: " + creatingUser.id);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const registeredNotes = await notes.findAll();
    res.send({ db: registeredNotes });
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    const count = await notes.destroy({ where: { id: id } });

    res.send({ message: `Deleted row(s): ${count}` });
  });
module.exports = router;

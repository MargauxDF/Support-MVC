const models = require("../models");

const browse = (req, res) => {
  models.wilder
    .findAll()
    .then(([wilders]) => {
      res.send(wilders);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.wilder
    .find(id)
    .then(([result]) => {
      if (result[0]) {
        res.send(result[0]);
      } else {
        res.status(404).send("Wilder not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const wilder = req.body;

  wilder.id = parseInt(req.params.id, 10);

  models.wilder
    .update(wilder)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Wilder not found");
      } else {
        res.status(200).json(wilder);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const wilder = req.body;

  models.wilder
    .insert(wilder)
    .then(([result]) => {
      res
        .location(`/api/wilders/${result.insertId}`)
        .status(201)
        .send({ status: "Wilder created", data: wilder });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.wilder
    .delete(req.params.id)
    .then(([rows]) => {
      if (rows.affectedRows === 0) {
        res.status(404).send("Wilder not found");
      } else {
        res.status(201).send("Wilder deleted");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};

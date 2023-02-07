const db = require("../models");
const Taille = db.taille;

exports.create = (req, res) => {
  const taille = {
    tail: req.body.tail,
    qte: req.body.qte,
  };
  /*  let data=req.body ;
    console.log(data) ; */
  let size = new Taille(taille);
  size
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

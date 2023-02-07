const db = require("../models");
const multer = require("multer");
const Article = db.article;
filename = "";

const myStorage = multer.diskStorage({
  destination: "./upload",
  filename: (req, file, redirect) => {
    let f1 = Date.now() + "." + file.mimetype.split("/")[1];
    redirect(null, f1);
    filename = f1;
  },
});
const upload = multer({ storage: myStorage });
(exports.create = upload.any("image")),
  (req, res) => {
    // Validate request

    // Create a User
    const article = {
      image: [
        {
          imageName: {
            type: String,
          },
        },
      ],
      tittle: req.body.tittle,
      prix: req.body.prix,
      taille: req.body.taille,
      nom: req.body.nom,
      description: req.body.description,
      couleur: req.body.couleur,
      tissu: req.body.tissu,
      doublure: req.body.doublure,
      details: req.body.details,
      conseils: req.body.conseils,
      tailleetcoupe: req.body.tailleetcoupe,
    };

    // Save User in the database
    Article.create(article)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Article.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
  let myid = req.params.id;
  Article.findByPk({ _id: myid })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  let myid = req.params.id;
  let newData = req.body;
  Article.update(newData, { where: { _id: myid } })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  let myid = req.params.id;
  Article.destroy({ _id: myid })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};
// Add Size
exports.addSize = (req, res) => {
  let data = req.taille;
  console.log(data);

  let tail = new Article(data);
  tail
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

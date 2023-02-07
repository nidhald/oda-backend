const multer = require("multer");
const db = require("../models");
const Shooting = db.shooting;
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
    let data = req.body;
    console.log(data);

    let sh = new Shooting(data);
    sh.image = filename;
    sh.save()
      .then((result) => {
        filename = "";
        res.send(result);
      })
      .catch((error) => {
        res.send(error);
      });
  };

exports.findAll = (req, res) => {
  Shooting.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = (app) => {
  const tailles = require("../controllers/taille.controller.js");

  var router = require("express").Router();

  // Ajouter taille
  router.post("/ajouttail", tailles.create);

  app.use("", router);
};
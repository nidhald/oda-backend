/* const express = require("express");
const Article = require("../models/article");
const router = express.Router();
const multer = require("multer") ;

filename ="" ;

const myStorage = multer.diskStorage (
    {
            destination : "./upload" ,
            filename : (req , file , redirect )=>{
                 let f1 = Date.now() + "." + file.mimetype.split("/")[1]
                 redirect (null, f1) ;
                 filename = f1 ;  
            }
    }
)
const upload = multer({ storage : myStorage}) ; */

module.exports = (app) => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Ajouter taille
  router.post("/ajoutart", articles.create);
  router.post("/ajouttail", articles.addSize);
  router.get("/getallart", articles.findAll);
  router.get("/getbyidart/:id", articles.findOne);
  router.delete("/supprimerart/:id", articles.delete);
  router.put("/updateart/:id", articles.update);
  app.use("", router);
};

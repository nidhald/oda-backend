module.exports = (app) => {
    const shootings = require("../controllers/shooting.controller.js");
    var router = require("express").Router();
  // Add new shooting
    router.post("/ajoutsho", shootings.create); 
    // get all shootings
router.get("/getallsho" , shootings.findAll);
  
    app.use("/", router);
  };
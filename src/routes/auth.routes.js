const express = require("express");
//  import the controller object 
const authController = require("../controllers/auth.controller");


const router = express.Router();

 router.post("/register", authController.registerUser);


 
module.exports = router;
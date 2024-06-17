const express = require("express");
const router = express.Router();

//controllers
const { login , signup } = require("../controllers/authController");

//routes
router.post("/login", login);

//registration
router.post("/signup", signup);

module.exports = router;

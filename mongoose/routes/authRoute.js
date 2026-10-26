const { signupController, signinController} = require("../controllers/authController.js")

var { Router }  = require("express");
var routeObj = Router();

routeObj.post("/sign-up", signupController);
routeObj.post("/sign-in", signinController);

module.exports = routeObj;
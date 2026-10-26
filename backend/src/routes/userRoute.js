var { Router }  = require("express");
const { getAllUsersData, createAccount, login } = require("../controllers/userControllers");


var routeObj = Router();


routeObj.get("/get-all-users", getAllUsersData);
routeObj.post("/sign-up", createAccount);
routeObj.post("/sign-in", login);


module.exports = routeObj; 

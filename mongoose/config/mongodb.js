const mongoose = require("mongoose")
const mongodb_url = "mongodb://localhost:27017/gfgmongoosedb"

function connectDB(){
    mongoose.connect(mongodb_url)
    .then( ()=>{
        console.log("connected with mongodb server and database")
    } )
    .catch( ()=>{
        console.log("failed to connect wirh mongodb server and database")
    } )
}
module.exports = connectDB ;
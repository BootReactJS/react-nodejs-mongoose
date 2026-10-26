
const CustomerModelClass =  require("../schema/customerSchema.js");

function insertData( newuser ){
    return CustomerModelClass.create( newuser )
}

function checkUser(  ){
}

module.exports = {insertData, checkUser} 
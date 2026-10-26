const { insertData } = require("../model/authModel")

function signupController(request, response){
    insertData(request.body)
    .then( (data)=>{
        response.send( {ok: true, message: "Created account", data: data} );
    }).catch( (error) => {
        response.send( {ok: false, message: "failed to create account"} );
        console.log(error)
    });

}

function signinController(request, response){
    response.send("signin working")
}
module.exports = {signupController, signinController} ;
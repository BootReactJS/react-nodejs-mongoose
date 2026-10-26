const { connectServer, connectDatabase, connectCollection, createAccountRow,accessData, checkUser } =
    require("../model/userModel");

function getAllUsersData(request, response) {
  //handle the request
  const  data = request.body;

  // connect to server, database,collection

  //connectServer();
  const dbRef = connectDatabase("gfg13db");
  const collectionRef = connectCollection(dbRef, "users");

  accessData(collectionRef).
    then( (users) => {
        response.send({ok: true, result: users});
    }).
    catch( () => {
        response.send( { ok:false, error: "failed to fetch users"} );
    });

}

function createAccount(request, response){
    const  data = request.body;

  //connectServer();
  const dbRef = connectDatabase("gfg13db");
  const collectionRef = connectCollection(dbRef, "users");

  createAccountRow(collectionRef, data )
  .then( (response)=>{
      console.log("success" + success)  
      response.send( { ok:true, error: "account created successfully"} )
  })
  .catch( (error)=> {
      console.log("error " + error)
      response.send( { ok:false, error: "failed to create account"} )
  }) 
  
}

function login(request, response){
const  data = request.body;

  //connectServer();
  const dbRef = connectDatabase("gfg13db");
  const collectionRef = connectCollection(dbRef, "users");

  checkUser();

}

module.exports = {getAllUsersData, createAccount, login}
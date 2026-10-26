const  { MongoClient } =  require("mongodb");
const mongoClient =  new MongoClient("mongodb://localhost:27017");


function connectServer(){
    mongoClient.connect()
            .then(  ()=> {
                console.log("Successfully connected with MongoDB server");

            })
            .catch( () =>{
                console.log("Failed to connect with MongoDB server");

            })
}

function connectDatabase(dbName){
    const dbRef = mongoClient.db(dbName);
    return dbRef;
}

function connectCollection(dbRef, collectionName){
    const collectionRef = dbRef.collection(collectionName);
    return collectionRef;
}

function createAccountRow(collectionRef, accountRecord){
    return collectionRef.insertOne(accountRecord);
}

function accessData(collectionRef){
    return collectionRef.find().toArray();
}

function checkUser(){

}

module.exports = { connectServer, connectDatabase, connectCollection, 
    createAccountRow,accessData, checkUser };



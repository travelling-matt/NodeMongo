//require  mongoClient from mongodb
//npm i mongodb
const { MongoClient } = require("mongodb");

//require built in library 'dotenv'
//npm i dotenv
require("dotenv").config();

//build connection string
//pulls from .env file
//naming convention in .env is all uppercase, underscores not spaces. string can be mixed case.
const client = new MongoClient(process.env.MONGO_URI)

//create async function to add info to db
//wait while we connect to mongo
//create db
//create collection
//wait and create movie
const connection = async (crudFunc, dataObj) => {
    try {
        await client.connect();
        console.log("connection succesful")
        const db = client.db("db1");
        const collection = db.collection("movies");
        // await collection.insertOne({name: "Spiderman"})
        //don't want to hardcode data. crudFunc is just a function form index and dataObj is the data we pass in from the terminal.
        await crudFunc(collection, dataObj);
        client.close();
        console.log("connection closed")
    } catch (error) {
        console.log(error);
    }
};

module.exports = connection;
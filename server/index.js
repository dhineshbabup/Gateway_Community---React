const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const form = require("./model/Form.model");
const userData = require("./model/Form.model");
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/GateGuardian", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
});
const userModel = require("./model/NewUser.model")

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongosh conected sucessfully");
});



app.post("/createUser", async (req, res) => {
  const { name, email, password, age } = await req.body;
  console.log(name);
  const user = new form({ name, email, password, age });
  user.save();
  res.send("data submitted");
});
app.get("/getUsers", async(req, res) => {
  const data = await form.find({})
  res.json({success: true, data: data });
});

// delete

app.delete("/delete/:id",async (req,res)=>{
  const id = req.params.id;
  console.log(id)
  const data = await form.deleteOne({_id: id})
  res.send({success:true, message: "data deleted successfully", data: data})
})

///update data
app.put("/update",async(req,res)=>{
  console.log(req.body)
  const {_id,...rest} = req.body
  console.log(rest)
  const data = await form.updateOne({_id: _id},rest)
  res.send({success:true, message: "data updated successfully", data: data})
})
//create data save data in db
app.post("/create",async (req,res)=>{
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()
  res.send({success:true,message:"data", data: data})
})
//Appartment Data

// const findCollectionExist = (name,data) => {
//   const { MongoClient } = require('mongodb');
//   async function checkCollectionExists(dbName, collectionName) {
//     try {
//       const client = new MongoClient('mongodb://localhost:27017')
//       await client.connect();
//       const database = client.db(dbName);
//       const collections = await database.listCollections().toArray();
//       const collectionExists = collections.some(
//         (collection) => collection.name === collectionName
//       );
      
//       return collectionExists;
//     } finally {
//       // Close the MongoDB connection
//     }
//   }

//   const dbName = 'GateGuardian';
//   const collectionName = name;
//   checkCollectionExists(dbName, collectionName)
//     .then(async (exists) => {
//       if (exists) {
//         console.log (`The collection '${collectionName}' exists.`);
//       } else {
//         console.log(`The collection '${collectionName}' does not exist.`);
//         await createAndInsertCollection(name,data)
//       }
//     })
//     .catch((err) => {
//       console.error('Error:', err);
//     });

  
// }

// const appartmentSchema = new mongoose.Schema({
//   appartmentName: String,
//   appartmentAddress: String,
//   mobileNumber: String,
//   ownerName: String,
//   ID: String,
//   email: String,
//   password: String
// })



// app.post("/createAppartment", async (req, res) => {
//   const { appartmentName, appartmentAddress, mobileNumber, ownerName, ID, email, password } = await req.body;
//   console.log(req.body);
//   // const data1 = {appartmentName:'appartmentName', appartmentAddress: 'appartmentAddress', mobileNumber: '0987', ownerName: 'ownerName', ID: 'ID', email: 'email', password: 'password'}
//   const data = {appartmentName:appartmentName, appartmentAddress: appartmentAddress, mobileNumber: mobileNumber, ownerName: ownerName, ID: ID, email: email, password: password}
//   const result = await findCollectionExist(appartmentName,data)
  








//   res.send("data submitted");
// });




// // Use a function to dynamically create a collection and insert data
// async function createAndInsertCollection(collectionName, data) {
//   try {
//     const Collection = mongoose.model(collectionName, appartmentSchema);
//     const user = new Collection(data)
//     try {
      
//       await user.save();
//       console.log('Document saved successfully');
//     } catch (error) {
//       console.error(error);
//     }
//     // const result = await Collection.insertMany(data);
//     console.log(`Collection ${collectionName} created and data inserted:`);
//   } catch (error) {
//     console.error(`Error creating or inserting data into ${collectionName}:`, error);
//   }
// }
























app.listen("8000", () => {
  console.log("App is litening 8000");
});

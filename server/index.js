const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const form = require("./model/Form.model");
const userData = require("./model/Form.model");
const nodemailer = require('nodemailer')
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

app.get("/getUsers", async(req, res) => {
  const data = await userModel.find({})
  res.json({success: true, data: data });
});

app.post("/createUser", async (req, res) => {
  console.log(req.body);
  const data = new form(req.body);
  await data.save();
  res.send({success:true});
});
//login
app.post("/login",async(req, res) => {
  const email = req.body.enteredEmail
  const data = await form.find({email: email});
  res.send({data:data})

})
// delete

app.delete("/delete/:id",async (req,res)=>{
  const id = req.params.id;
  console.log(id)
  const data = await userModel.deleteOne({_id: id})
  res.send({success:true, message: "data deleted successfully", data: data})
})

///update data
app.put("/update",async(req,res)=>{
  console.log(req.body)
  const {_id,...rest} = req.body
  console.log(rest)
  const data = await userModel.updateOne({_id: _id},rest)
  res.send({success:true, message: "data updated successfully", data: data})
})
//create data save data in db
app.post("/create",async (req,res)=>{
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()
  res.send({success:true,message:"data", data: data})
})

app.post('/email',async (req,res) => {
console.log(req.body)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth : {
    user : 'dhineshbabu855@gmail.com',
    pass: 'dhzl rwdl zfli jjhw'
  }
})
const {email, message} = req.body
console.log(email)
const mailOptions = {
  from: 'dhineshbabu855@gmail.com',
  to: email,
  subject: 'This is From Admin',
  text: message
}
transporter.sendMail(mailOptions, (err, info) => {
  if(err) {
    console.log(err)
  }
  else {
    console.log(`response ${info.response}`)
    res.send({status: true})
  }
} )
transporter.close()

})

app.post('/securityEmail',async (req,res) => {
console.log(req.body.name)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth : {
    user : 'dhineshbabu855@gmail.com',
    pass: 'dhzl rwdl zfli jjhw'
  }
})
const message = `Hello Sir/Madam, \n\n You have a visitor, he/she is wait outside \n if you like to he/she wants to come, call gate number and confirm it Sir/Madam \n\n Name: ${req.body.name}, \n Age: ${req.body.age}, \n Purpose: ${req.body.purpose}, \n Mobile Number: ${req.body.visitorMobile}, \n In-Time: ${req.body.inTime}, \n Out_Time: ${req.body.outTime}`
console.log(message)
const {email} = req.body
const mailOptions = {
  from: 'dhineshbabu855@gmail.com',
  to: email,
  subject: 'This is From Gate',
  text: message
}
transporter.sendMail(mailOptions, (err, info) => {
  if(err) {
    console.log(err)
  }
  else {
    console.log(`response ${info.response}`)
    res.send({status: true})
  }
})
transporter.close()

})
//Appartment Data


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
  
//   console.log(req.body)
//   const collectionExists = await mongoose.connection.db.listCollections({ name: req.body.appartmentName}).hasNext();
//   console.log(collectionExists)

//   if(collectionExists) {
//     console.log("exists")
//   }
//   else {
//     const appartmentName = req.body.appartmentName
//     console.log(appartmentName)
//     const newCollection = mongoose.model(appartmentName.toLowerCase(),appartmentSchema);
//     console.log("new collection created")
//   }


//   // res.send("data submitted");
// });



























app.listen("8000", () => {
  console.log("App is litening 8000");
});

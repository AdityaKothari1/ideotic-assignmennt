const mongoose = require("mongoose");
require("dotenv").config()
mongoose.set('strictQuery', false)
const connection = mongoose.connect(
  process.env.Mongo_URL
);

const userSchema=mongoose.Schema({
    "name":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true},
}) 

const userModal=mongoose.model("user",userSchema)

module.exports={userModal,connection}
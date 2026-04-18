const mongoose=require("mongoose")
require('dotenv').config()
database=process.env.DATABASE_URL
const url=database ? database : "mongodb://localhost:27017/internshala"
module.exports.connect=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Database is connected");
    }).catch((err)=>{
        console.log("Error in connecting database",err);
    })
}

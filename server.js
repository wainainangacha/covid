const express = require("express");
const mongoose= require("mongoose");
const app = express();

// port connection
app.listen(8000, () =>{
    console.log("connection successfull")
})

//fetching connection string
const uri = "mongodb+srv://wainaina:37973757@cluster0.sk1gk4h.mongodb.net/?retryWrites=true&w=majority"

//async function
async function connect(){
    try {
     await mongoose.connect(uri);
     console.log("conection to db successful")   
    } catch (error) {
        console.log(error)
    }
    }


connect();

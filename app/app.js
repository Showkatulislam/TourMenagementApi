const express = require('express');

const cors = require('cors');
const router = require('../utils/Tour.route');

const dotenv = require('dotenv').config();


const app=express()

app.use(cors())
app.use(express.json())


app.use("/api/tour",router)

app.get("/",(req,res,next)=>{
    res.send("Hello brother")
})

module.exports=app
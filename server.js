const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
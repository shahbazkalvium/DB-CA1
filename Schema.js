const mongoose = require("mongoose") 
const express = require("express")

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }

}) 


const menuItems = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

const Restaurant = mongoose.model("Restaurant",restaurantSchema)
const Menu = mongoose.model("Menu",menuItems)

module.exports={Restaurant,Menu};
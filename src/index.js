// require('dotenv').config({path : './env'}) This Syntax Is In Common Js
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./db/index.js"

dotenv.config({path : './env'})

//
/*
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        throw error;
    }
})() */

connectDB()
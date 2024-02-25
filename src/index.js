// require('dotenv').config({path : './env'}) This Syntax Is In Common Js
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import app from "./app.js";

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
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server Is Running On Port : http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";

import connectToDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectToDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!",err);
})
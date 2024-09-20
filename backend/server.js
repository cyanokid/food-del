//use ES6 feature
//using express 

import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"

//app config
const app = express()
//find port
const port = 4000

//middleware
app.use(express.json())
app.use(cors()) //can access backend from any frontend

//db connection
connectDB();

//api endpoint
//api foodRouter
app.use("/api/food", foodRouter)
//api for images
app.use("/images", express.static('uploads'))

//request data from server using http get
app.get("/", (req,res)=>{
   res.send("API Working") 
})

//run express server
app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongoDB stuff
//mongodb+srv://Cyanokid:1234@cluster0.dsr2b.mongodb.net/?
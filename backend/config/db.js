// to connect with database
import mongoose from "mongoose";

export const connectDB = async () => {
    //connect the mongodblink/(tajuk project) 
    await mongoose.connect('mongodb+srv://Cyanokid:1234@cluster0.dsr2b.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
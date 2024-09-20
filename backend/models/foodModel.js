import mongoose from "mongoose";

//create schema
const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true},
})

//create model = mongoose.model("name", schemaName)
//if it's already there it will use the exist model, if not it will create new one
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;
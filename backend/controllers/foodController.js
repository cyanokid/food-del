import { Console } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item
const addFood = async (req,res) =>{
    //name of image
    let image_filename = `${req.file.filename}`;
    
    //new food into db
    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename,
    })

    try{
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch(error){
        console.log(error);    
        res.json({success:false, message:"Error"})
    }  
}

//all food list
const listFood = async (req, res) =>{
    try {
        //get all food from model
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove food item
const removeFood = async (req, res) =>{
    try {
        //what to delete, using id
        const food = await foodModel.findById(req.body.id);
        //delete from upload folder
        fs.unlink(`uploads/${food.image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed."})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error."})
        
    }
}

export {addFood, listFood, removeFood}
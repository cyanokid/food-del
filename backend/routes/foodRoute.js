////middleware upload

import express from"express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer" //to create image storage system

//express router
const foodRouter = express.Router();

//image storage engine
//will be go to upload folder 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        //to make file unique name
        //bagi nama bagi setiap gambar
        return cb(null,`${Date.now()}${file.originalname}` )
    }
})


//pass the storage that we create into storage variable
const upload = multer({storage:storage})

//to send data to server
foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood);

export default foodRouter;


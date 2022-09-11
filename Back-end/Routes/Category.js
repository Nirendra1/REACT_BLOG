const express = require('express');
const router = express.Router();
const categoryController = require("../Controller/categories-controller")
const { authorization }=require("../config/Auth")

//Addone
router.post("/Addone",categoryController.addOne)

//RemoveOne
router.delete("/removeOne",categoryController.removeOneData)

//updateOne 
router.put("/update/:id",categoryController.updateOne)

//getOne
router.get('/getOne/:id',categoryController.getone)

//list all category
router.get('/getAll',categoryController.getAll)



module.exports = router;
const express = require('express');
const router = express.Router();
const vedioController = require('../Controller/videos-controller')
const { authorization }=require("../config/Auth")

//addVedio
router.post('/addVedio',vedioController.addVedio)

//getoneVedio
router.get('/fetchOne/:id',vedioController.fetchOne)

//fetchAll Vedio
router.get('/fetchAll',vedioController.fetchAllVedio)

//fetchTopVedio
router.get('/fetchTopVedio',vedioController.fetchTopVedio)

//updateVedio
router.put('/update/:id',vedioController.updateVedio)

//deleteVedio
router.delete('/deleteOne',vedioController.deleteOne)









module.exports = router
const express = require('express');
const router = express.Router();
const CommentController = require('../Controller/comments-controller')
const { authorization }=require("../config/Auth")

//addComments
router.post('/addComments',CommentController.addComments)

//removeOneComments
router.delete('/deleteComments',CommentController.commentsDelete)

//get a specific user)
router.get('/fetch',CommentController.fetchOneCommnets)



module.exports = router;
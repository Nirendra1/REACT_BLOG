const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const CommentSchema = new Schema (
    {   
        body: {
            type: String,
            required: true,
        }, 
        post: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
        },
        // created: {
        //     type: Date,
        //     default: Date.now
        //   },       
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
         
    },
    { timestamps: true }
);
 
module.exports = mongoose.model("Comment",CommentSchema)
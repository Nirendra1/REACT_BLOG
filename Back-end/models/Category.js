const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const CategorySchema = new Schema({
   name:{
       type:String,
       required:true
   },
   createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
},
   
},{timestamps:true}
)
module.exports = mongoose.model("Category",CategorySchema)
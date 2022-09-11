const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true
    },
    // role: {
    //     type: String,
    //     default: "user",
    //     enum: ["user", "admin"],
    // },
    experience:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    }
},
{timestamps:true}
)

module.exports = mongoose.model("User", UserSchema)
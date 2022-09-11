const mongoose = require("mongoose");
const userModal = require("../models/User");
const bcrypt = require("bcrypt");
const { securePassword,generateJwt } = require("../Utils/securePassword");
const {message}= require("../Heplers/ErrorMessage")
const {generalSuccessMessages}= require("../Heplers/SuccessMessage")
const {statusCode}= require("../Heplers/StatusCode")
const {successResponse}= require("../Heplers/SuccessResponse")
const {errorResponse}= require("../Heplers/ErrorResponse")
const CryptoJS = require("crypto-js");

//register
exports.register = async (req, res) => {
  try {
    // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();  // enypt password 
//     var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // const hash = await securePassword(req.body.password)
    const newUser = new userModal({
      username: req.body.username,
      email: req.body.email,
      language: req.body.language,
      experience:req.body.experience,
      password: hashedPassword,
    });
    const user = await newUser.save();
    successResponse(res,statusCode.msg_save_code,generalSuccessMessages.UserCreatedSuccessfully,user)
  } catch (error) {
    errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,error)
  }
};
//login
exports.login = async (req,res)=>{
    try{
        const {email} = req.body
        const user = await userModal.findOne({email:email})
        if(!user){
          errorResponse(res,statusCode.no_record_found,message.notfound_text)
        }
        const validate = await bcrypt.compare(req.body.password,user.password)
        if(!validate) {
          errorResponse(res,statusCode.exception_msg_code,message.password_msg)
        }
        const userData = {
            email :req.body.email,
            name: user.username,
            user_Id :user._id
        };
        const Token = await generateJwt(userData)
        const {password,...others} = user._doc
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.loginSuccessfully,{Token,user})
    }catch(err){
      errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text)
    }
}
//update
exports.update = async(req,res)=>{
  try{

  }catch(error){
    res.send("error",error)
  }
}
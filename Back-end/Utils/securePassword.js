const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
//hashed passowrd
async function securePassword (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 	salt);
    return hashedPassword;
};

// generate token 
async function  generateJwt(data) {
    let token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });
    return token;
  };

//   const validateEmail = async (email) => {
//     let user = await User.findOne({ email });
//     if(user) {
//         return true;
//     } else {
//         return false;
//     }
// };
 
module.exports = {securePassword,generateJwt};
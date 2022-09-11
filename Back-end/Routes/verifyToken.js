const { JsonWebTokenError, verify } = require("jsonwebtoken");


// 1. create token for Authenticate

const verifyToken = (req, res, next) => {
  const authHeader = req.header.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
      if (err) {
        
        res.status(401).json("you are not authenticated");
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

const verifyAuthAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if ((req.user.id === req.params.id) === req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("you are not allowed ");
    }
  });
};

// verify admin token 
const verifyTokanAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(401).json("you are not allowed to that !")
        }
    })
}

module.exports = { verifyToken, verifyAuthAndAuthorization,verifyTokanAndAdmin};

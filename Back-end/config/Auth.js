const jwt = require("jsonwebtoken");


const authorization = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.params.token || req.body.token || req.query.token ||req.headers.token
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(403).json("token is not valid");
      }
      req.user = decode;
        console.log(req.user);
        next();
    });
  } else {
    return res.status(401).json("you are unthenticated");
  }
};







module.exports = { authorization };

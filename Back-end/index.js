const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const http = require("http");
const Db = require('./config/database')
const userRoute = require("./Routes/User")
const PostRoute = require("./Routes/Post")
const CategoryRoute = require("./Routes/Category")
const commentRoute =require('./Routes/Comment')
const vedioRoute =require('./Routes/Vedio')
// const crypto = require('crypto');
const cors = require("cors");
const server = http.createServer(app);
require("dotenv").config()


app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
    // credentials: "true",
  })
);


app.use('/userRoute',userRoute)
app.use('/PostRoute',PostRoute)
app.use('/CategoryRoute',CategoryRoute)
app.use('/commentRoute',commentRoute)
app.use('/vedioRoute',vedioRoute)




const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
// server listening 
server.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});


module.exports = app;

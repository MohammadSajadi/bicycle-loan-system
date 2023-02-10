const express = require('express');
const router = require('./router');
const cors = require("cors");
const app = express();
const {protect} = require('./modules/auth.js')
const {createNewUser, signin} = require("./handlers/user")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use('/api', protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

app.get("/", (req, res) =>{
  res.send("bicycle loan system");
});

module.exports = app;
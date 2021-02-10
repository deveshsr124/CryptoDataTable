const path = require('path');
const axios=require('axios');
const fetch=require('node-fetch');
const cors=require('cors');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(express.json({limit:'1mb'}));
app.listen(3000, () => {
  console.log("server started");
});


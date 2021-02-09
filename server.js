const path = require('path');
const axios=require('axios');
const fetch=require('node-fetch');
const cors=require('cors');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server started");
});

app.post('/data',async function (req,res){
  try{const api_url=`https://api.wazirx.com/api/v2/tickers`;
  const fetch_response= await fetch(api_url);
  const data= await fetch_response.json();
  console.log(data);
}
catch (err){
    console.log(err);
}
})


/*app.post('/data',(req,res)=>{
    const data=req.body.data;
    console.log(data);
})
*/

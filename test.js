const express = require('express')
var geoip = require('geoip-lite');
const app = express();
const port = 5000;

var ip = "129.0.205.85";
var geo = geoip.lookup(ip);
//129.0.76.139

app.get('/', (req, res) => {
    var ip = "129.0.205.85";
    var geo = geoip.lookup(ip);
    console.log(geo);
    res.send(`Your Location is ${geo}.`)
  })
  
  app.listen(port, (req, res) => {
    console.log(`Example of get Location for IP address on port ${port}`)
  })

  console.log(geo);


  
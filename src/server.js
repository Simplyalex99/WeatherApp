const express = require('express');

const fetch = require('node-fetch');
const app = express();
const key = process.env.API_KEY;//"82005d27a116c2880c8f0fcb866998a0";
require ('dotenv').config();







 
//let zipCodeURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}&appid=${key}`;





app.get('/weathercityname',async (request,response)=>{

const cityName = request.params.cityName;
let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
resoponse.json(json);





})



app.get('/weatherlatlon', async (request,response)=>{

const latlon = request.params.latlon.split(',');
const latitude = latlon[0];
const longitude = latlon[1];
let api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
response.json(json);

  }
);




const port = process.env.PORT || 5000;




app.listen(port,()=>{
console.log(`Listening on port: ${port}`); //port number


});
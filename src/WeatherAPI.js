export { requestDataByLocation, requestDataByZIPCode, requestDataByCityName };
import axios from "axios";
//connecting backend to front end here
const KELVIN = 273;
var weather = {
  lat: latitude,
  lon: longitude,
  temp_Value: 0,
  temp_Unit: "C",
  description: "",
  country: "",
};

function setWeatherData(api_url) {
  axios
    .get(api_url)
    .then((response) => {
      let body = response.data;
      weather.description = body.weather[0].description;
      weather.temp = Math.floor(body.main.temp - KELVIN);
      weather.country = body.sys.country;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
function requestDataByLocation(location) {
  var latitude = location.latitude;
  var longitude = location.longitude;

  let api_url = `weather/${latitude},${longitude}`;
  setWeatherData(api_url);

  return weather;
}
function requestDataByZIPCode(zipCode) {}
function requestDataByCityName(cityName) {}

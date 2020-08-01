export { queryWeather };
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

function queryWeather(userResponse) {
  if (userResponse.length >= 9 && !validateCoordinates(userResponse)) {
    requestDataByLocation(userResponse);
  } else if (validateZipCode(userResponse)) {
    requestDataByZIPCode(userResponse);
  } else {
    requestDataByCityName(userResponse);
  }

  return weather;
}

function validateCoordinates(stringCoordinates) {
  var value = stringCoordinates.trim();
  return isNaN(stringCoordinates);
}

function validateZipCode(elementValue) {
  var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
  var zipCodePattern2 = /^\d{5}$/;
  return (
    zipCodePattern.test(elementValue) || zipCodePattern2.test(elementValue)
  );
}
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
function requestDataByCityName(cityName) {
  let api_url = `weather/${city}`;
  setWeatherData(api_url);
}

export { checkGeolocationIsSupported, getPosition };

function checkGeolocationIsSupported() {
  return navigator.geolocation;
}
function getPosition() {
  var location = {
    latitude: "",
    longitude: "",
  };

  navigator.geolocation.getCurrentPosition(setPosition);

  function setPosition(position) {
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
  }

  return location;
}

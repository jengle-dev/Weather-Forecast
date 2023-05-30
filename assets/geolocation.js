//geolocation api using 
//page asks for geolocation permission vars
var elMap = document.getElementById('loc');
var msg = 'Sorry, we are unable to pull your location. Please enter your location.';

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = "Checking location...";
}else{
  elMap.textContent = msg;
}

function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

    msg = '<h2>Longitude: </h2>';
    msg += '<p>' + longitude + '</p>';
    msg += '<h2>Latitude:</h2>';
    msg += '<p>' + latitude + '</p>';    
    
    elMap.innerHTML = msg;
}

function fail(error) {
  var errorMessage = '';

  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      errorMessage = 'The request to get user location timed out.';
      break;
    case error.UNKNOWN_ERROR:
      errorMessage = 'An unknown error occurred.';
      break;
  }

  elMap.textContent = 'Error: ' + errorMessage;
}

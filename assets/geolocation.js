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
    msg = '<h2>Longitude: <br>';
    msg += position.coords.longitute + '</h2>';
    msg += '<h2>Latitude: <br>';
    msg += position.coords.latitude + '</h2>';
    elMap.innerHTML = msg;
}

function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}

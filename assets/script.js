// API Key: 49c095bcef09171182fa818f843823fc

var cityNameEl = document.getElementById('cityName');
var fetchButton = document.getElementById('submitCityBtn');
var cityStateCtryApi = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={49c095bcef09171182fa818f843823fc}';
var requestUrlLatLon = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={49c095bcef09171182fa818f843823fc}';

function getApiLatLon() {

  fetch(requestUrlLatLon)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var cityName = document.createElement('h3');
        cityName.textContent = data[i];
        issueContainer.append(cityName);
      }
    
    });
}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
fetchButton.addEventListener('click', getApiLatLon);


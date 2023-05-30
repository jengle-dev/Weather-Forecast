var APIkey = '581231bcadf0964174631daae440186d';
var fetchButton = document.getElementById('searchBtn');
var cityName = document.getElementById('cityName');
var usState = document.getElementById('usState');
var zip = document.getElementById('zipCode');
var countryCode = document.getElementById('countryCode');
var tempType = document.getSelection('');


// For temperature in Fahrenheit use units=imperial
// default to imperial (F) - {API key}&units=imperial
var forecastUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${usState},${countryCode}&units=imperial&cnt=1&appid=${APIkey}`;
var zipForecastUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}${countryCode}&appid=${APIkey}&lang=en`;

console.log(forecastUrl);
console.log(zipForecastUrl);

// state dropdown - default none
// ISO country dropdown - default none but none = US
// zip code needs zip and country code + api key
// do we want to add option for metric (C)?

// q= is the query parameter, where we can add any user input to specify the data that we want to request in the API call
// concatenate the user input, which is stored in the variable city
// concatenate the other required parameter, appid=

document.addEventListener('DOMContentLoaded', function() {

fetchButton.addEventListener('click', returnData);

fetch(forecastUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

function returnData() {
  if (cityName.value !== '' && usState.value !== '' && countryCode.value !== '') {
    fetch(forecastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else if (cityName.value === '' && zip.value !== '' && countryCode.value !== '') {
    fetch(zipForecastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else if (cityName.value !== '' && usState.value === '' && countryCode.value !== '') {
    fetch(forecastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else {
    // Display an alert or handle the case when required fields are missing
    console.log('Please fill in the required fields.');
  }
}

fetchButton.addEventListener('click', returnData);
});
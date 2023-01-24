// API Key: 49c095bcef09171182fa818f843823fc
var APIkey = '49c095bcef09171182fa818f843823fc';
var fetchButton = document.getElementById('searchBtn');
var city = document.getElementById('cityName');
var USstate;
var country;
var userInput;

// q= is the query parameter, where we can add any user input to specify the data that we want to request in the API call
// concatenate the user input, which is stored in the variable city
// concatenate the other required parameter, appid=

const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);

 // Making an API call (request) function
async function getUserInput() {
  const response = await fetch(queryURL);

  // Parsing to JSON 
  const data = await response.json();
  console.lot(data.results);
}


console.log(queryURL);

fetchButton.addEventListener('click', getApiLatLon);


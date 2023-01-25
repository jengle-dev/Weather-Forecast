// API Key: 49c095bcef09171182fa818f843823fc
// For temperature in Fahrenheit use units=imperial

var APIkey = '49c095bcef09171182fa818f843823fc';
var fetchButton = document.getElementById('searchBtn');
var zipButton = document.getElementById('searchZipBtn');
var city = document.getElementById('cityName');
var state = document.getElementById('usState');
var zip = document.getElementById('zipCode');



// q= is the query parameter, where we can add any user input to specify the data that we want to request in the API call
// concatenate the user input, which is stored in the variable city
// concatenate the other required parameter, appid=

function getApi() {

  fetchButton.addEventListener('click', function () {
    // Insert the API url to get the user's input
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    console.log(queryURL);

    fetch(queryURL)
      // Making an API call (request) function
      .then(function (response) {
          // const data = await response.json();
          // Parsing to JSON 
        return response.json();
      })
      .then(function (data) {
        // for (var i = 0; i < data.length; i++) {
        //   console.log(i);
          // console.log(data.results);
        console.log(data);
        // }

        window.addEventListener('unhandledrejection', function(event) {
          // the event object has two special properties:
          alert(event.promise); // [object Promise] - the promise that generated the error
          alert(event.reason); // Error: Invalid City Name! - the unhandled error object
        });
        
        new Promise(function() {
          throw new Error("Invalid City Name");
        }); // no catch to handle the error
      })
  })
}

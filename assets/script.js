// API Key: 49c095bcef09171182fa818f843823fc

//url needed to capture Direct Geocoding: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var APIkey = '49c095bcef09171182fa818f843823fc';
var fetchButton = document.getElementById('searchBtn');
var city = document.getElementById('cityName');
var state = document.getElementById('usState');
var zip = document.getElementById('zipCode');
var countryCode = document.getElementById('countryCode');
var tempType = document.getSelection('');
// For temperature in Fahrenheit use units=imperial
// default to imperial (F) - {API key}&units=imperial
var forecastUrl = `https://api.openweathermap.org/geo/1.0/direct?q=lang=en&${city},${state},${countryCode}&units=imperial&cnt=1&appid=${APIkey}`;
var zipForecastUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}${countryCode}&appid=${APIkey}&lang=en`;

// state dropdown - default none
// ISO country dropdown - default none but none = US
// zip code needs zip and country code + api key
// do we want to add option for metric (C)?

// q= is the query parameter, where we can add any user input to specify the data that we want to request in the API call
// concatenate the user input, which is stored in the variable city
// concatenate the other required parameter, appid=
fetchButton.addEventListener('click', returnData);

function returnData() {
    if (zip === '') {
      fetch(forecastUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
      // } else {
      //   fetch(zipForecastUrl)
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       console.log(data);
      //     })
    };
    returnData();

    //     //IF CITY IS NOT BLANK AND IF STATE IS NOT BLANK AND IF COUNTRY CODE IS NOT BLANK --> use queryURL1
    //     //OR
    //     //IF CITY IS BLANK AND COUNTRY CODE IS NOT BLANK AND ZIP IS NOT BLANK --> use queryURLzip
    //     //OR
    //     //IF CITY IS NOT BLANK AND IF STATE IS BLANK, AND COUNTRY CODE IS NOT BLANK --> use queryURL3
    //     //ELSE
    //     //Display alert or required fields
    //     //trim spaces before and after user input
    //     // alert if city or location not found, check spelling or rekey

    //     // const queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + countryCode + "&limit=1&appid=" + APIkey;
    //     // console.log(queryURL);


    // }



    //     fetch(queryURL)
    //       // Making an API call (request) function
    //       .then(function (response) {
    //         // const data = await response.json();
    //         // Parsing to JSON 
    //         return response.json();
    //       })
    //       .then(function (data) {
    //         // for (var i = 0; i < data.length; i++) {
    //         //   console.log(i);
    //         // console.log(data.results);
    //         console.log(data);
    //         // }

    //       })
    //   }); // no catch to handle the error
    // }


    //reminder need local storage and to create elements to display under search as buttons/links to those cities
  })
// PseudoCode Weather Dashboard
// Create variables for the weather API
// Create a function to get the weather of the selected City
// Selected City is displayed in the header card
// Seleted City is stored in local storage

// Create a function to get the date
// Create a function to get the time
// Create a function to get the location
// Create a function to get the weather icon
// Create a function to get the weather description
// Create a function to get the temperature
// Create a function to get the humidity
// Create a function to get the wind speed
// Create a function to get the wind direction
// Create a function to get the visibility
// Create a function to get the UV index
// Create a function whether uv index is low, moderate, high, or extreme

// const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
// const apiKey = "&appid=114ffacdd50b22d216de5af070ce37c2";
// const units = "&units=metric";


const cityEl = document.getElementById("searchBarInput");
const searchEl = document.getElementById("searchButton");
const clearEl = document.getElementById("clear-history");
const nameEl = document.getElementById("city-name");
const currentPicEl = document.getElementById("current-pic");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const uvIndex = document.getElementById("uv-index");
const historyEl = document.getElementById("history");
var fivedayEl = document.getElementById("fiveday-header");
var todayweatherEl = document.getElementById("today-weather");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


// API Key
const APIKey = "114ffacdd50b22d216de5af070ce37c2";

// Search Button Function
searchButton.addEventListener("click", function(event) {
    // prevent page from refreshing
    event.preventDefault();
    // get the value of the citySearch input
    const citySearch = cityEl.value;
    // get the weather of the city
    console.log(citySearch);
    getWeather(citySearch);
    // add the city to the search history
    // citySearch.JSON.parse(localStorage.getItem("search")) || [];
    // clear search content
    cityEl.value = "";

});

// Clear History Function
// clearButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     localStorage.clear();
//     searchHistory = [];
//     renderserachHistory();
// });

// function renderserachHistory() {

// }
// https://api.openweathermap.org/data/2.5/weather?q=
// https://api.openweathermap.org/data/3.0/onecall?q=
function getWeather(citySearch) { 
    const urlOne = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&APPID=" + APIKey + "&units=metric";
    fetch(urlOne)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        // console.log(data.coord.lon);
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    

    // const urlTwo = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=metric";
    //     // fetch the data from the url
    
    // fetch(urlTwo)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(weatherData) {
    //         console.log(weatherData);
    //         console.log(weatherData.main.temp);
    //         console.log(weatherData.main.humidity);
    //         todayweatherEl.classList.remove("d-none");


    //     })

})
}
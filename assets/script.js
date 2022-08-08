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


const citySearch = document.getElementById("citySearch");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const selectedCity = document.getElementById("selectedCity");

const date = document.getElementById("date");
const time = document.getElementById("time");

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
    const city = citySearch.value;
    // get the weather of the city
    getWeather(city);
    // add the city to the search history
    addToHistory(city);
    // clear search content
    citySearch.value = "";

});

// Clear History Function
clearButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    searchHistory = [];
    renderserachHistory();
});

function renderserachHistory() {

}

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    // fetch the data from the url
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            selectedCity.innerHTML = data.name;
            date.innerHTML = moment().format("dddd, MMMM Do YYYY");
            time.innerHTML = moment().format("h:mm a");
            temperature.innerHTML = `${data.main.temp}&deg;C`;
            humidity.innerHTML = `${data.main.humidity}%`;
            windSpeed.innerHTML = `${data.wind.speed} km/h`;
            uvIndex.innerHTML = `${data.main.temp}&deg;C`;
            getUVIndex(data.coord.lat, data.coord.lon);
            getWeatherIcon(data.weather[0].id);
            getWeatherDescription(data.weather[0].id);
            getWeatherForecast(data.name);
        })
        .catch(err => console.log(err));    

        // let lat = response.data.coord.lat;
        // let lon = response.data.coord.lon;

    
}

getWeather("London");
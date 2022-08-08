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
// Create a function to get the sunrise
// Create a function to get the sunset
// Create a function to get the UV index
// Create a function whether uv index is low, moderate, high, or extreme

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=114ffacdd50b22d216de5af070ce37c2";
const units = "&units=metric";
const city = document.getElementById("city");
const date = document.getElementById("date");
const time = document.getElementById("time");
const location = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const windDirection = document.getElementById("wind-direction");
const visibility = document.getElementById("visibility");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const uvIndex = document.getElementById("uv-index");
const uvIndexColor = document.getElementById("uv-index-color");


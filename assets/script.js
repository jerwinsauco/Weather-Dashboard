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
const citySearch = document.getElementById("citySearch");
const search = document.getElementById("searchButton");
const clear = document.getElementById("clearButton");
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
let searchHistory = JSON.parse(localStorage.getItem("search")) 

// API Key
const APIKey = "114ffacdd50b22d216de5af070ce37c2";


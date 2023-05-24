const apiKey = require('./apiKey.js');

const city = 'London'
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData)
  });

console.log('Requesting weather data');
const apiKey = require('./apiKey.js');

class WeatherClient {
  constructor() {

  }

  fetchWeatherData(city) {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    fetch(apiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
    console.log(weatherData)
  });

  }
}

class Weather {
  constructor() {
    
  }
}


module.exports = { weatherClient: WeatherClient}
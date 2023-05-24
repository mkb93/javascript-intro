const dotenv = require('./apiKey')
const apiKey = dotenv

class WeatherClient {
  fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    return fetch(apiUrl)
      .then(response => response.json())
  }
}

class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = ''
  }

  load(city) {
     return this.client.fetchWeatherData(city).then((data)=>{ this.weatherData = data})
  }

  getWeather() {
    return this.weatherData
  } 
}

module.exports = {
  WeatherClient,
  Weather
}
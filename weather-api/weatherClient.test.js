const dotenv = require('./apiKey.js')
const jestFetchMock = require('jest-fetch-mock')
jessFetch.enable
const apiKey = dotenv

 {WeatherClient, Weather} = require('./weatherClient')


describe('Weather' , () => {
  it("gets weather data from client", (done) => {
    beforeEach(() => {
      // if you have an existing `beforeEach` just add the following line to it
      fetchMock.doMock()
    })
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      main: {
        temp: 19.97,
        feels_like: 19.41,
        temp_min: 18.19,
        temp_max: 21.67,
        pressure: 1024,
        humidity: 53
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
      ]
    });

    const weather = new Weather(mockClient);
    
    weather.load('London').then(()=> {
      
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('London');
      
      const weatherData = weather.getWeather();
      expect(weatherData.main.temp).toEqual(19.97);
      
    });
  });
});
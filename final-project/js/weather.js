
const url = `https://api.openweathermap.org/data/2.5/weather?id=3663517&units=imperial&appid=6e78c57483005f7c22d3a70888f92e0e`;

// Retrieve the weather data from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed * 3.6; // Convert wind speed from m/s to km/h
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const shortForecast = data.weather[0].description;
    const humidity = data.main.humidity

    // Calculating wind chill
    let windChill;
    if (temperature <10 && windSpeed > 4.8) {
      windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
      windChill = NaN;
    }

    // Update the HTML with the temperature, wind speed and forecast
    document.querySelector('.weather-temp').innerHTML = `${temperature.toFixed(1)} &#176;C`;
    document.querySelector('#wind-speed').innerHTML = `${windSpeed.toFixed(1)}`;
    document.querySelector('#weather-icon').src = weatherIcon;
    document.querySelector('#shortForecast').innerHTML = shortForecast;
    document.querySelector('#humidity').innerHTML = `${humidity.toFixed(1)}g/m3`;

    // Update the HTML with the wind chill
    if (isNaN(windChill)) {
      document.querySelector('#wind-chill').innerHTML = 'N/A';
    } else {
      document.querySelector('#wind-chill').innerHTML = `${windChill.toFixed(1)} &#176;C`;
    }
  });
        
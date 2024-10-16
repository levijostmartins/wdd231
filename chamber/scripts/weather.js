document.addEventListener('DOMContentLoaded', async () => {
    const weatherContainer = document.querySelector('.current-weather');
    const forecastContainer = document.querySelector('.weather-forecast');

    const API_KEY = '07916e332c379dc919db27dccc6e17ab';
    const city = 'Sao Paulo'; // The city for the chamber
    const units = 'metric'; // Celsius

    // Fetch weather data
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`);
            const data = await response.json();

            // Format the weather description
            const weatherDescription = data.weather.map(event => capitalizeWords(event.description)).join(', ');

            // Display current weather data
            weatherContainer.innerHTML = `
                <p>Temperature: ${Math.round(data.main.temp)}&deg;C</p>
                <p>Weather: ${weatherDescription}</p>
            `;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    // Fetch 3-day forecast
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=24&appid=${API_KEY}`);
            const data = await response.json();

            // Extract data for the next 3 days (every 8th item is 24 hours apart)
            const forecastData = data.list.filter((_, index) => index % 8 === 0).slice(1, 4);

            // Display 3-day forecast
            forecastContainer.innerHTML = forecastData.map(forecast => {
                const date = new Date(forecast.dt * 1000).toLocaleDateString();
                const temp = Math.round(forecast.main.temp);
                const description = capitalizeWords(forecast.weather[0].description);
                return `
                    <div>
                        <h4>${date}</h4>
                        <p>Temp: ${temp}&deg;C</p>
                        <p>${description}</p>
                    </div>
                `;
            }).join('');
        } catch (error) {
            console.error('Error fetching forecast data:', error);
        }
    }

    // Helper function to capitalize each word in the weather description
    function capitalizeWords(description) {
        return description.replace(/\b\w/g, char => char.toUpperCase());
    }

    // Fetch both current weather and forecast
    fetchWeather();
    fetchForecast();
});

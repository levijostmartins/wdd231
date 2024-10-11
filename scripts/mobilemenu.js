// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Fetch weather data from OpenWeather API
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'your_api_key'; // Replace with your actual API key
    const city = 'Timbuktu';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const conditions = data.weather[0].description;
            const humidity = data.main.humidity;

            document.querySelector('.current-weather').innerHTML = `
                <h3>Current Weather</h3>
                <p>${temp}°F | ${conditions}</p>
                <p>Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.log('Weather data fetch error:', error);
            document.querySelector('.current-weather').innerHTML = '<p>Unable to fetch weather data.</p>';
        });
});

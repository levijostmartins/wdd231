// html
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('caption-desc');

// API
const lat = 49.75; 
const lon = 6.64;  
const apiKey = '3e0642907979cb565c4a81f8ef44b1ca';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3e0642907979cb565c4a81f8ef44b1ca`;

// Asynchronous function to fetch data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data); 
    } else {
      throw Error(await response.text()); 
    }
  } catch (error) {
    console.log('Error fetching data:', error);s
  }
}

// Display Data
function displayResults(data) {
  // Display temperature
  currentTemp.innerHTML = `${data.main.temp}&deg;C`; 

  // Weather icon and description
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

apiFetch();

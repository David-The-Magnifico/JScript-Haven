const apiKey = 'b229b5b07ca56143e6493ee2be346b88';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const background = document.querySelector('.background');

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value;

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available for the entered city.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            weatherInfo.innerHTML = `<p><strong>${city}</strong>: ${weatherDescription}, Temperature: ${temperature}°C</p>`;

            const backgroundImageUrl = `https://source.unsplash.com/1600x900/?${city}`;
            background.style.backgroundImage = `url(${backgroundImageUrl})`;
        })
        .catch(error => {
            console.error('Error:', error.message);
            weatherInfo.textContent = 'Failed to fetch weather data. Please try again later.';
        });

    cityInput.value = '';
    weatherInfo.style.display = 'block';
});
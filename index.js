const API_KEY = `862eab327e2928db8f511b30cf2c3ff8`;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const showWeather = (data) => {
    if (data.cod == '404') {
        weather.innerHTML = "City not found";
        return;
    }
    
    const icon = data.weather[0].icon;
    const country = data.sys.country.toLowerCase();
    document.querySelector('.country').innerHTML = `<div>
<img src="https://openweathermap.org/images/flags/${country}.png" alt="Country flag" />
</div>`;

    weather.innerHTML = ` <div>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
    
</div>

<div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main}</h4>
</div>`;
};

const getWeather = async (city) => {

    weather.innerHTML="Loading..."
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  
        
    return showWeather(data);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeather(search.value);
});

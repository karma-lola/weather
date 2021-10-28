let choice = document.getElementById("city-name");
let form = document.querySelector("form");
let submit = document.getElementById("submit");
let temp = document.querySelector(".city-temp");
let cityName = document.querySelector(".placeName");
let description = document.querySelector(".description");
let logo = document.querySelector(".city-icon");
const apiKey = "b096503fdf1bc097636f3f3e5fefb4ef";
let url = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  url = `https://api.openweathermap.org/data/2.5/weather?q=${choice.value}&appid=${apiKey}&units=metric`;

  getWeatherApi();
});

function getWeatherApi() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let icon = data.weather[0].icon;
      description.innerText = data.weather[0].description;
      cityName.innerText = data.name;
      temp.innerText = "Temperatue:" + data.main.temp + "C°";
      logo.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(data);
    });
}

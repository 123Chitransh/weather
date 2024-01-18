


const apiKey = "0d14007aa960d37e700eb0d6ef360a9d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".error").style.display = "none";
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "image/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "image/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "image/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "image/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "image/mist.png";
        }
    }



}

searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

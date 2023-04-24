const apiKey = "d3fbf62553b96d4bdd34693dcea7f803" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ;

const searchBox = document.querySelector(".inputt input");
const searchBtn = document.querySelector(".inputt button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block" ;
        document.querySelector(".weatherr").style.display = "none" ;
    }
    else{
        var data = await response.json();
    
    
    document.querySelector(".city1").innerHTML = data.name ;
    document.querySelector(".temp1").innerHTML = data.main.temp  + "°c" ;
    document.querySelector(".humidity1").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind1").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
    {
        icon.src = "clouds.png" ;
    }
    else if(data.weather[0].main == "Clear")
    {
        icon.src = "clear.png" ;
    }
    else if(data.weather[0].main == "Rain")
    {
        icon.src = "rain.png" ;
    }
    else if(data.weather[0].main == "Drizzle")
    {
        icon.src = "drizzle.png" ;
    }
    else if(data.weather[0].main == "Mist")
    {
        icon.src = "mist.png" ;
    }

    document.querySelector(".weatherr").style.display = "block" ;
    document.querySelector(".error").style.display = "none" ;

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

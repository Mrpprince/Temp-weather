const api ={
    key: "2c184dd171013138d018de35731d14d4",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}


const searchBtn =document.getElementById("search_btn");
const input = document.getElementById("input");

searchBtn.addEventListener("click",function(){

   
    getResults(input. value);
});

function getResults(query)
{
       fetch (`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then(weather =>
        {
            return weather.json();

        }).then (displayResults)
}

function displayResults(weather)
{
    console.log(weather);

document.getElementById('city').innerText=`${weather.name},${weather.sys.country}`;

let temp = document.getElementById("temp");
temp.innerHTML=`${Math.round(weather.main.temp)}`;


let weather_des= document.getElementById("description");

weather_des.innerHTML=weather.weather[0].main;


}
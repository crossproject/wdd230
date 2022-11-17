const weatherIcon = document.getElementById("w-icon");
const temperature = document.getElementById("temp-celcius");
const weatherStatus = document.getElementById("w-stats");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=180d290cb4799e855223c718d2f06c4c"

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data,weatherIcon,temperature,weatherStatus);
        console.log(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  //weatherData.wind.speed.toFixed(0)

function displayResults(weatherData,icon,temperature,status) {
let wIcon = document.createElement("img");
wIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
wIcon.setAttribute('alt', capitalize(weatherData.weather[0].description));
icon.prepend(wIcon);
temperature.textContent = weatherData.main.temp.toFixed(0);
status.textContent = capitalize(weatherData.weather[0].description);
}

function capitalize(string){
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

apiFetch(url);

function getWindchill(wind,temperature){

//const wind = parseFloat(document.getElementById("wind-speed").textContent);
//const temperature = parseFloat(document.getElementById("temp-celcius").textContent);
//let tempFahr = temperature * 9/5 + 32;
let windChill = "N/A";

if (temperature < 10 || wind > 4.8) {
    windChill = 35.74 + 0.6215 * temperature - 35.75 * wind ** 0.16 + 0.4275 * temperature * wind ** 0.16;
    windChill = windChill.toFixed(2);
};

const windChillWrite = document.getElementById("wind-chill");
windChillWrite.innerHTML = windChill;
}
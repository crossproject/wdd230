const weatherIcon = document.getElementById("w-icon");
const temperature = document.getElementById("temp-celcius");
const weatherStatus = document.getElementById("w-stats");
const windSpeed = document.getElementById("wind-speed");
const windChill = document.getElementById("wind-chill");
const url = "https://api.openweathermap.org/data/2.5/weather?id=3836277&units=metric&appid=180d290cb4799e855223c718d2f06c4c"

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data,weatherIcon,temperature,weatherStatus,windSpeed,windChill);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(weatherData,icon,temperature,status,windSpeed,windChill) {
  // Display Icon
  let wIcon = document.createElement("img");
  wIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
  wIcon.setAttribute('alt', capitalize(weatherData.weather[0].description));
  icon.prepend(wIcon);
  // Display Temperature
  temperature.textContent = weatherData.main.temp.toFixed(0);
  // Display Status
  status.textContent = capitalize(weatherData.weather[0].description);
  // Display WindSpeed
  windSpeed.textContent = weatherData.wind.speed.toFixed(0);
  // Display WindChill
  windChill.textContent = getWindchill(windSpeed.textContent,temperature.textContent);
}

function capitalize(string){
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function getWindchill(wind,temperature){
  if (temperature < 10 || wind > 4.8) {
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * wind ** 0.16 + 0.4275 * temperature * wind ** 0.16;
    windChill = windChill.toFixed(2);
    return windChill;
  } else {
    return "N/A";
  };

}

apiFetch(url);
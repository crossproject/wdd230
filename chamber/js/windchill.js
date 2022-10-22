const wind = parseFloat(document.getElementById("wind-speed").textContent);
const temperature = parseFloat(document.getElementById("temp-celcius").textContent);
let tempFahr = temperature * 9/5 + 32;
let windChill = "N/A";

if (temperature < 10 || wind > 4.8) {
    windChill = 35.74 + 0.6215 * temperature - 35.75 * wind ** 0.16 + 0.4275 * temperature * wind ** 0.16;
    windChill = windChill.toFixed(2);
};

const windChillWrite = document.getElementById("wind-chill");
windChillWrite.innerHTML = windChill;
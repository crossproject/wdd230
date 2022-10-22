// Header Date
const date = new Date();
const dateDiv = document.getElementById("date");

const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);

dateDiv.innerHTML = `<span>${fullDate}</span>`;

// Enable Banner
const weekDay = date.getDay();
const banner = document.getElementById("monday-tuesday-banner");

function enableBanner() {
    banner.classList.remove("disable-banner");
    banner.classList.add("enable-banner");
}

function disableBanner() {
    banner.classList.remove("enable-banner");
    banner.classList.add("disable-banner");
}

switch (weekDay) {
    case 1:
        enableBanner();
        break
    case 2:
        enableBanner();
        break
}

// Close Banner

const closeBtn = document.getElementById("close-banner");
closeBtn.onclick = disableBanner;

// Menu Button
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("menu");
    document.getElementById("menu-btn").classList.toggle("menu");
}

const menuBtn = document.getElementById("menu-btn")
menuBtn.onclick = toggleMenu;


// Footer Year
const year = document.querySelector("#year");
year.innerHTML = date.getFullYear();

// Last modified date
const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;




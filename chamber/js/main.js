// Header Date
const dateDiv = document.getElementById("date");

const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(new Date());

dateDiv.innerHTML = `<span>${fullDate}</span>`;

// Menu Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("menu");
    document.getElementById("menuBtn").classList.toggle("menu");
}

const menuBtn = document.getElementById("menuBtn")
menuBtn.onclick = toggleMenu;


// Footer Year
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

// Last modified date
const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;
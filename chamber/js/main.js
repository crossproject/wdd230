// IntersectionObserver
const imagesToLoad = document.querySelectorAll("picture img[data-src]");

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    
    image.setAttribute("src",image.getAttribute("data-src"));
    console.log(image.getAttribute("src"))
    image.onload = () => {image.removeAttribute("data-src");};

};

if("IntersectionObserver" in window) {
    
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}



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
try {
    closeBtn.onclick = disableBanner;
} catch (error) {
    console.log(error)
}

// Menu Button
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("menu");
    document.getElementById("menu-btn").classList.toggle("menu");
}

const menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = toggleMenu;

// Hidden value on form
const hiddenVal = document.getElementById("hidden-data-value");
try {
    hiddenVal.setAttribute("value",date);
} catch (error) {
    console.log(error)
}


// Footer Year
const year = document.querySelector("#year");
year.innerHTML = date.getFullYear();

// Last modified date
const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;


// Visit counter
const lastVisitElement = document.querySelector("#visits") ;
let actualStorageValue = window.localStorage.getItem("last-visit");
if (actualStorageValue === null) {
    window.localStorage.setItem("last-visit", new Date());
    lastVisitElement.innerHTML = 0;
} else {
    let totalDays = Math.round((new Date(actualStorageValue).getTime()-new Date().getTime())/-(1000*60*60*24));
    lastVisitElement.innerHTML = totalDays;
};

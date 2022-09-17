const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;
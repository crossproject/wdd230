const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

let liItem = 0;

button.addEventListener("click", function () {
    if (input.value.length !== 0) {
        
        const liItem = document.createElement('li');
        const liBtn = document.createElement('button');

        liItem.textContent = input.value;
        liBtn.textContent = "❌";
        liItem.appendChild(liBtn);
        list.appendChild(liItem);

        liBtn.addEventListener('click', () => {
            list.removeChild(liItem);
          });
        
        input.value = "";
        input.focus();
              
    } else {
        console.log("Nothing to add");
    }
  
});


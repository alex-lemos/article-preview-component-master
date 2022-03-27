// # GLOBAL

let svg = document.querySelector(".svg__path");
let btnShare = document.querySelector(".information-img");
let containerShare = document.querySelector(".container-shared");

// # EVENT

btnShare.addEventListener("click", showContainerShare);

// # FUNCTION

function showContainerShare(){
    svg.classList.toggle("svg__path--bg");
    btnShare.classList.toggle("information-img--bg");
    containerShare.classList.toggle("container-shared--hidden")
}
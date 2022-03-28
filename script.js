// # GLOBAL

let svg = document.querySelector(".svg__path");
let btnShare = document.querySelector(".information-img");
let btnShareMobile = document.querySelector(".mobile__bg");
let containerShare = document.querySelector(".container-shared");
let textInfo = document.querySelector(".text-information");
let containerMobile = document.querySelector(".container-mobile");

// # EVENT

btnShare.addEventListener("click", showContainerShare);
btnShareMobile.addEventListener("click", showContainerShare);

// # FUNCTION

function showContainerShare(){
    svg.classList.toggle("svg__path--bg"); //Fixa a cor do svg
    btnShare.classList.toggle("information-img--bg");//Fixa a cor do bg

    containerShare.classList.toggle("container-shared--hidden");
    textInfo.classList.toggle("text-information--hidden");
    containerMobile.classList.toggle("container-mobile--hidden");
}
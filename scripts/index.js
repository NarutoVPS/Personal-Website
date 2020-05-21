// navbar
var burger = document.querySelector(".burger");
var navItem = document.querySelector("nav ul");

burger.addEventListener("click", function(){
    navItem.classList.toggle("view");
})

// navbar
var burger = document.querySelector(".burger");
var navItem = document.querySelector("nav ul");

burger.addEventListener("click", function(){
    navItem.classList.toggle("view");
})


// No touching
var myPic = document.querySelector(".pic img");
myPic.addEventListener("click", function () {
    alert("No Touching!!!");
})
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

// Navbar Scroll
$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 100) {
			$("nav").addClass("navAppear");
		} else {
			$("nav").removeClass("navAppear");
		}
	});
});

// Dark Theme
$('nav ul i').on("click", function(){
	$('body').toggleClass("dark-mode");
});

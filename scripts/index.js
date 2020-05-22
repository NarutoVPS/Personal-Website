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
let dark = false;
$('nav ul i').on("click", function(){
	$('body').toggleClass("dark-mode");
	if (!dark){
		$(".title").css("color", "#007bff");
		$("nav, .navWrapper").css("backgroundColor", "#12171a");
		$(".stalk").css("background", "#1e1e30");
		$(".stalk p").css("color", "#6c757d")
		$(".icons a").css("color", "#23395b")
		$(".stalk a:hover").css("color", "#28a745")
	}

	dark = false;
});


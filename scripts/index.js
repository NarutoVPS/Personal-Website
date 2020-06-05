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
		$("nav a").css("color", "#ff073a");
		$(".stalk").css("background", "#1e1e30");
		$(".stalk p").css("color", "#6c757d")
		$(".icons a").css("color", "#23395b")
		$(".projects a").css("color", "#9673b9");
		dark = true;
	}
	else {
		$(".title").css("color", "#2c3e50");
		$("nav, .navWrapper").css("backgroundColor", "#23395b");
		$("nav a").css("color", "#efbc9b");
		$(".stalk").css("background", "#90C2E7");
		$(".stalk p").css("color", "black")
		$(".icons a").css("color", "#007bff")
		$(".projects a").css("color", "#007bff");
		dark = false;
	}
});


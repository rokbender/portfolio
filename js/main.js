// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
let header = document.querySelector(".header");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && window.innerWidth>800) {
    navbar.classList.add("sticky");
    header.style.paddingTop = "60px";
  } else {
    navbar.classList.remove("sticky");
    header.style.paddingTop = "0px";
  }
}

function showNavbar(){
  
  var x = document.getElementById("nav_list");
    if (x.className === "nav_list") {
        x.className += " responsive";
        navbar.classList.add("fig");
    } else {
        x.className = "nav_list";
       navbar.classList.remove("fig");
    }
}
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

document.addEventListener("DOMContentLoaded",()=>{
  const scrollItems=document.querySelectorAll(".scroll-item");
  const line=document.querySelector(".progress_item");
  const checkBox=document.querySelector("#btn_theme");
  const colorPicker=document.querySelector("#paletre");
  var r = document.querySelector(':root');

  const scrollAnimation=()=>{
    let windowCenter=(window.innerHeight/2)+window.scrollY;
    scrollItems.forEach(el => {
      let scrollOffset=el.offsetTop;
      if(windowCenter>=scrollOffset){
        el.classList.add("animation-class");
      }
      else{
        el.classList.remove("animation-class");
      }
      
    });
  }
  const progressAnimation=()=>{
    let scrollTop=window.scrollY;
    let windowHeight=window.innerHeight;
    let siteHeight=document.documentElement.scrollHeight;
    let percentageBar=Math.floor(scrollTop/(siteHeight-windowHeight)*100);
    console.log(percentageBar);
    line.style.width=`${percentageBar}%`
  }
  const changeTheme=()=>{
    checkBox.addEventListener('change',()=>{
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
    });

  }
  const colorChange=(event)=>{
    console.log(event.target.value);
    r.style.setProperty('--color3', event.target.value);
  }

  scrollAnimation();
  progressAnimation();
  changeTheme();
  
  colorPicker.addEventListener("change", colorChange, false)
  window.addEventListener("scroll",()=>{
    scrollAnimation();
    progressAnimation();
  });
});

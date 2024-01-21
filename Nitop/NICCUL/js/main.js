// const slides = Array.from(document.querySelectorAll(".slide"));
const burger =  document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const menu =  document.querySelector(".menubar");
const preloader = document.getElementById("preloader");

window.addEventListener("load",()=>{
     preloader.style.display = "none";
})

burger.addEventListener("click",function (){
     menu.classList.toggle("active");
})
navLinks.forEach(link=>{
     link.addEventListener("click",()=>{
          menu.classList.remove('active');
     })
})

// window.addEventListener("scroll",()=>{
//      document.querySelector('nav').classList.toggle('window-scroll',scrollY > 0);
// })


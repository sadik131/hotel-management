const navbar = document.querySelector("#nav_toggle");
const navbarManu = document.querySelector("#nav_manus");

// navbar toggle
navbar.addEventListener("click",()=>{
    navbarManu.classList.toggle("navbarOpen")
})
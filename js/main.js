const navbar = document.querySelector("#nav_toggle");
const navbarManu = document.querySelector("#nav_manus");

// navbar toggle
navbar.addEventListener("click",()=>{
    navbarManu.classList.toggle("navbarOpen")
})

// swiper
const swiper = new Swiper(".swiper",{
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true
    },
    // brackpoints
    slidesPerView:3,
    spaceBetween:20,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        960:{
            slidesPerView:2,
        },
        1200:{
            slidesPerView:3,
        }
    }
})
const navbar = document.querySelector("#nav_toggle");
const navbarManu = document.querySelector("#nav_manus");

// navbar toggle
navbar.addEventListener("click", () => {
    navbarManu.classList.toggle("navbarOpen")
})

// swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // brackpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})


// animation on scroll 
const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 600,
    // reset:true 
})

// hero text
sr.reveal(".hero__text", { origin: "top" })

// staps
sr.reveal(".steps__step", { distance: "100px", interval: 100 })

// about text
sr.reveal(".about__text", { origin: "left" })
sr.reveal(".about__img", { origin: "right", delay: 300 })

// testimonial
sr.reveal(".testimonial__bg", { delay: 800 })
sr.reveal(".testimonial__title")
sr.reveal(".testimonial__slider", { delay: 1000 })

// brand img
sr.reveal(".brands__img", { delay: 600, distance: "100px", interval: 100 })

// work
sr.reveal(".work__title")
sr.reveal(".work__subtitle", { delay: 800 })
sr.reveal(".work__grid", { delay: 1000 })

// state
sr.reveal(".state")
sr.reveal(".stats__item", { distance: "100px", interval: 100 })

// news
sr.reveal(".news__subtitle")
sr.reveal(".news__title", { delay: 800 })
sr.reveal(".news__item", { distance: "100px", interval: 100 })

// contact
sr.reveal(".contact__container")

// footer
sr.reveal(".footer__item", { distance: "100px", interval: 100 })
sr.reveal(".footer__copy")

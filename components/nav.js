const navBars = document.querySelector(".menuBars-wrap");

const mobileNav = document.querySelector(".navbar-mobile");

const menuIcon = document.querySelector("#menu-icon");

const body = document.body;

navBars.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.classList.toggle("active");

    if (mobileNav.classList.contains("active")) {
        body.style.overflow = "hidden"; 
        menuIcon.classList.remove("fa-bars-staggered");
        menuIcon.classList.add("fa-xmark"); 
    } else {
        body.style.overflow = ""; 
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars-staggered"); 
    }
})

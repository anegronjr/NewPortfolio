const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("open");
});

const heroName = document.querySelector(".hero-name");
const heroBlurb = document.querySelector(".hero-blurb");

heroName.style.opacity = "1";
heroName.style.transform = "translateX(0px)";
heroBlurb.style.opacity = "1";
heroBlurb.style.transform = "translateY(0px)";
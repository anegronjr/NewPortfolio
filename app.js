const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav");

burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
});

const heroName = document.querySelector(".hero-name");
const heroBlurb = document.querySelector(".hero-blurb");

heroName.style.opacity = "1";
heroName.style.transform = "translateX(0px)";
heroBlurb.style.opacity = "1";
heroBlurb.style.transform = "translateY(0px)";

const projContainers = document.querySelectorAll(".project-container");
const projTracks = document.querySelectorAll(".project-track");

for (let i = 0; i < projContainers.length; i++){
    projContainers[i].addEventListener("click", function(){
        if (projTracks[i].style.transform == "translateX(-100%)"){
        projTracks[i].style.transform = "translateX(0)";
        } else {
            projTracks[i].style.transform = "translateX(-100%)";
        }
    });
}

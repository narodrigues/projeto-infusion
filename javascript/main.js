/* HAMBURGUER MENU */

let menu = document.querySelector(".menu");
let topNav = document.querySelector(".top-nav-links");

menu.addEventListener("click", function(){
    if(topNav.style.display === "block") {
        topNav.style.display = "none";
    } else {
        topNav.style.display = "block";
    }
});

window.addEventListener("resize", function(){
    if(window.innerWidth >= 770){
        topNav.style.display = "block";
    } else {
        topNav.style.display = "none";
    }
})







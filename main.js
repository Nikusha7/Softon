// MENU SECTION

document.querySelector("#open-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.add("nav-open");
     document.body.style.overflow = "hidden"; // block background scroll
});


document.querySelector("#close-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.remove("nav-open");
     document.body.style.overflow = ""; // restore scroll
});

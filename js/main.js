// MENU SECTION

document.querySelector("#open-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.add("nav-open");
     document.body.style.overflow = "hidden"; // block background scroll
});


document.querySelector("#close-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.remove("nav-open");
     document.body.style.overflow = ""; // restore scroll
});


document.addEventListener("DOMContentLoaded", function () {
  const switchBtn = document.getElementById("lang-switch");

  if (switchBtn) {
    switchBtn.addEventListener("click", function () {
      const currentPath = window.location.pathname;

      if (currentPath.startsWith("/en/")) {
        const newPath = currentPath.replace("/en/", "/ka/");
        window.location.href = newPath;
      } 
      else if (currentPath.startsWith("/ka/")) {
        const newPath = currentPath.replace("/ka/", "/en/");
        window.location.href = newPath;
      }
    });
  }
});

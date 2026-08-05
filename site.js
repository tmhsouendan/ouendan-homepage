const button = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".nav a");

function closeMenu() {

    nav.classList.remove("open");
    overlay.classList.remove("show");

    button.innerHTML = "☰";
    button.setAttribute("aria-expanded", "false");
}

button.addEventListener("click", () => {

    nav.classList.toggle("open");
    overlay.classList.toggle("show");

    const open = nav.classList.contains("open");

    button.innerHTML = open ? "✕" : "☰";

    button.setAttribute("aria-expanded", open);

});

overlay.addEventListener("click", closeMenu);

links.forEach(link => {

    link.addEventListener("click", closeMenu);

});

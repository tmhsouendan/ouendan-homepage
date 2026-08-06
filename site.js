const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {
    slide[current].classList.remove("active");

    current = (current + 1) % slides.lengsth;

    slides[current].classList.add("active");
}, 4000);
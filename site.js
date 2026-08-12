//JSON読み込み//
fetch('/text.json')
    .then(response => response.json())
    .then(text => {
        console.log(text);
        document.getElementById('welcomeMessage').textContent = text.welcomeMessage;
    })
    .catch(error => console.error('データの読み込みに失敗しました:', error));

//


//画像スライド//
const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}, 4000);
//画像スライドend//

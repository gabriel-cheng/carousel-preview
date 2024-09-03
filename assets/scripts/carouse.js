const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showSlide(index) {
    if(index < 0) {
        index = items.length - 1;
    } else if(index >= items.length) {
        index = 0;
    }

    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});
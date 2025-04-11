document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".cards");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    const scrollAmount = 400; // distância do scroll
    const cardWidth = 400 + 25;

  
    const cards = [...carousel.children];
    cards.slice(0, 3).forEach(card => {
        let clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });

    function scrollLeft() {
        if (carousel.scrollLeft === 0) {
        
            carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth - cardWidth;
        }
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }

    function scrollRight() {
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - cardWidth) {
        
            carousel.scrollLeft = 0;
        }
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    leftArrow.addEventListener("click", scrollLeft);
    rightArrow.addEventListener("click", scrollRight);
});
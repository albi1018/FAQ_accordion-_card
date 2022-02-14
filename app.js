const accordions = document.querySelectorAll(".accordion__content");
const arrows = document.querySelectorAll(".accordion__img");
const texts = document.querySelectorAll(".show");


arrows.forEach(arrow => {
    arrow.addEventListener("click", function() {
        arrow.parentElement.classList.toggle('active');
    })
})



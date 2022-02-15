const accordions = document.querySelectorAll(".accordion__content");
const arrows = document.querySelectorAll(".accordion__img");
const texts = document.querySelectorAll(".show");


accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
        accordion.classList.toggle('active');
    })
})



const navSlide = () => {
    const burger = document.querySelector('.menu-burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    burger.addEventListener('click', () => {
        //toggle
        nav.classList.toggle('nav-activacion');


        //animacion de Links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navMenu 0.5 ease forwards ${index / 7 + 2}s`;
            }

        });
        //animacion menu Burger
        burger.classList.toggle('toggle');
    });

}


navSlide();


$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600,
        adaptiveHeight: true,
    });

});
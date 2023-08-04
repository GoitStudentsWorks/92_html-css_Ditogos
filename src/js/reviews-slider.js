const reviews = new Swiper('.reviews-slider', {
clickable: true,
watchOverflow: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
breakpoints: {
    375: {
    slidesPerView: 1,
    spaceBetween: 16,
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 16,
    },
    1280: {
    slidesPerView: 3,
    spaceBetween: 32,
    },
},
});
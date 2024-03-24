/* voice
------------------------------------------ */
var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 28,
    breakpoints: {
        768: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 52,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return '0' + number;
        },
        formatFractionTotal: function (number) {
            return '0' + number;
        },
    },
});
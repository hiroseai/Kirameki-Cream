/* voice
------------------------------------------ */
var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 55,
    breakpoints: {
        768: {
            centeredSlides: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });
  
/* faq
------------------------------------------ */
  $('.question-text').on('click', function (e) {
    $(e.target).toggleClass('question-text-active');
  });
  
  $('.question-text').on('click', function (e) {
    var content = $(e.target).next();
    content.slideToggle();
  });
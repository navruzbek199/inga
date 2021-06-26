var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-1-next",
        prevEl: ".swiper-1-prev",
    },
});
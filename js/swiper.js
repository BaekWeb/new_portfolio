$(function () {
    // 제작했어요 - work 슬라이드

    var swiper = new Swiper(".work_swiper", {
        loop: true,
        // centeredSlides: true,
        // observeParents: true,
        pagination: {
          type: "fraction",
          el: ".work_pagenation",
        },
        navigation : {
          nextEl : '.work_next',
          prevEl : '.work_prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: "auto",
            spaceBetween: 40,
          },
          1540: {
            slidesPerView: "auto",
            spaceBetween: 40,
          }
        }
    });
})
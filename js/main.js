// ================= FancyBox =================
if (document.querySelector("[data-fancybox]")) {
  $("[data-fancybox]").fancybox({
    loop: true,
    protect: true,
  });
}

// ================= WOW Animation =================
if (typeof WOW === "function") {
  new WOW().init();
}

// ================= Odometer =================
if (document.querySelector(".odometer")) {
  $(".odometer").appear();
  $(".odometer").appear(function () {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
    window.odometerOptions = {
      format: "d",
    };
  });
}

// ================= Swiper: Domains =================
if (document.querySelector(".swiper-domains")) {
  new Swiper(".swiper-domains", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 4, spaceBetween: 30 },
    },
  });
}

// ================= Swiper: Inspiration =================
if (document.querySelector(".swiper-inspiration")) {
  new Swiper(".swiper-inspiration", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// ================= Swiper: Brands =================
if (document.querySelector(".swiper-brands")) {
  new Swiper(".swiper-brands", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 5, spaceBetween: 30 },
    },
  });
}

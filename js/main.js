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
      768: { slidesPerView: 3, spaceBetween: 20 },
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

// ============== Campaigns: Cover Overlay Resize ==============
if (document.querySelector(".campaigns-cover")) {
  const container = document.querySelector(".campaigns-cover");
  const img = container.querySelector("img");
  const firstCol = container.querySelector(".campaigns-img");

  if (img && firstCol) {
    const updateBeforeStyle = () => {
      const imgRect = img.getBoundingClientRect();
      const colRect = firstCol.getBoundingClientRect();
      const direction = getComputedStyle(document.documentElement).direction;

      const displayedHeight = imgRect.height;
      const reducedHeight = displayedHeight * 0.8;
      const containerTop = container.getBoundingClientRect().top;
      const topOffset = imgRect.top - containerTop + imgRect.height * 0.1;

      let beforeWidth;

      if (direction === "rtl") {
        const screenRight = window.innerWidth;
        const colRight = colRect.right;
        beforeWidth = screenRight - colRight + colRect.width;
      } else {
        beforeWidth = colRect.left + colRect.width;
      }

      container.style.setProperty("--before-height", `${reducedHeight}px`);
      container.style.setProperty("--before-top", `${topOffset}px`);
      container.style.setProperty("--before-width", `${beforeWidth}px`);
    };

    if (img.complete) {
      updateBeforeStyle();
    } else {
      img.onload = updateBeforeStyle;
    }

    const resizeObserver = new ResizeObserver(updateBeforeStyle);
    resizeObserver.observe(img);
    resizeObserver.observe(firstCol);

    window.addEventListener("resize", updateBeforeStyle);
  }
}
// ================= Share Button =================
document.querySelectorAll(".share-content").forEach((shareContent) => {
  const shareBtn = shareContent.querySelector(".share-btn");
  const shareList = shareContent.querySelector(".share-list");
  const closeBtn = shareContent.querySelector(".close-btn");

  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    shareList.classList.toggle("d-none");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      shareList.classList.add("d-none");
    });
  }

  document.addEventListener("click", (e) => {
    if (!shareContent.contains(e.target)) {
      shareList.classList.add("d-none");
    }
  });
});

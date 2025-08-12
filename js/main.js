// Initialize the FancyBox for videos
$(document).ready(function () {
  $("[data-fancybox]").fancybox({
    // Custom options can go here
    loop: true,
    protect: true,
  });
});

// Initialize WOW Animated
new WOW().init();

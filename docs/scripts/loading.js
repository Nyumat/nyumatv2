const is_index = document.getElementById("is_index").innerHTML;

const display_loading = (time_true, time_false, is_index) => {
  if (is_index == "true") {
    $(document).ready(function () {
      count = 0;
      $(".post_load").hide(0);
      counter = setInterval(function () {
        if (count < time_true) {
          rand =
            Math.floor(Math.random() * (time_true - time_false)) + time_false;
          count += rand / 10;
        } else {
          $(".counter").fadeOut(0);
          $(".load").fadeOut(0);
          clearInterval(counter);
          $(".post_load").fadeIn(1000);
          AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            anchorPlacement: "top-bottom",
          });
        }
      }, 80);
    });
  } else {
    $(document).ready(function () {
      count = 0;
      $(".post_load").hide(0);
      counter = setInterval(function () {
        if (count < time_false) {
          rand =
            Math.floor(Math.random() * (time_true - time_false)) + time_false;
          count += rand / 10;
        } else {
          $(".counter").fadeOut(0);
          $(".load").fadeOut(0);
          clearInterval(counter);
          $(".post_load").fadeIn(1000);
          AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            anchorPlacement: "top-bottom",
          });
        }
      }, 80);
    });
  }
};

window.onload = display_loading(100, 30, is_index);



const is_index = document.getElementById("is_index").innerHTML;

const display_loading = (time_true, time_false, is_index) => {
      if (is_index == "true") {
            $(document).ready(function () {
                  count = 0;
                  $(".post_load").hide(0);
                  counter = setInterval(function () {
                        if (count < time_true) {
                              count += 1;
                              if (count % 2 == 0) {
                                    count += 2;
                              } else {
                                    count++;
                              }
                        } else {
                              $(".counter").fadeOut(0);
                              $(".load").fadeOut(0);
                              clearInterval(counter);
                              $(".post_load").fadeIn(1000);
                        }
                  }, 80);
            });
      } else {
            $(document).ready(function () {
                  count = 0;
                  $(".post_load").hide(0);
                  counter = setInterval(function () {
                        if (count < time_false) {
                              count += 1;
                              if (count % 2 == 0) {
                                    count += 2;
                              } else {
                                    count++;
                              }
                        } else {
                              $(".counter").fadeOut(0);
                              $(".load").fadeOut(0);
                              clearInterval(counter);
                              $(".post_load").fadeIn(1000);
                        }
                  }, 80);
            });
      }
};

window.onload = display_loading(100, 30, is_index);

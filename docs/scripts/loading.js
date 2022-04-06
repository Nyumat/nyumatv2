const is_index = document.getElementById("is_index").innerHTML;

const random_number = () => {
      return Math.floor(Math.random() * 7) + 1;
};

const random_number_index = () => {
      return Math.floor(Math.random() * 4) + 1;
};

const display_loading = (index_load, non_index_load, is_index) => {
      if (is_index == "true") {
            $(document).ready(function () {
                  count = 0;
                  $(".post_load").hide(0);
                  counter = setInterval(function () {
                        $(".counter").text(count);
                        if (count < index_load) {
                              $("body").css("overflow", "hidden");
                              $(".counter").css("font-size", "+=1px");
                              count += random_number_index();
                        } else {
                              $("body").css("overflow", "auto");
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
                        $(".counter").text(count);
                        if (count < non_index_load) {
                              $("body").css("overflow", "hidden");
                              $(".counter").css("font-size", "+=1px");
                              count += random_number();
                        } else {
                              $("body").css("overflow", "auto");
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

window.onload = display_loading(101, 101, is_index);
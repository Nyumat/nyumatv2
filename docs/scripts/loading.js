// loading.js

// Refactor for v2. It was a mess before but we made it work cleanly now.

/**
 * @param {integer} count_to
 */

document.addEventListener("DOMContentLoaded", function () {
      AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            anchorPlacement: "top-bottom",
      });
      $(".load").hide();
});

function onsetload(count_to) {
      // 10 seconds from now
      var tenSecondsFromNow = new Date(new Date().getTime() + 10000);

      console.log(Cookies.get());
      
      if (Cookies.get("Loading Screen") == "Seen") {
            $(".load").hide();
            $(".post_load").fadeIn(500);
      } else {
            $(".loader-inner").show();
            $(".load").fadeIn(500);
            var start_count = 0;
            var counter = setInterval(function () {
                  $(".counter").text(start_count + "%");
                  start_count += 2;
                  $(".counter").css("font-size", "+=0.7px");
                  if (start_count == count_to) {
                        clearInterval(counter);
                        $(".counter").text(count_to);
                        setTimeout(function () {
                              $(".loader-inner").fadeOut(500);
                              $(".counter").fadeOut(500);
                              setTimeout(function () {
                                    $(".post_load").fadeIn(500);
                              }, 500);
                        }, 500);
                  }
            }, 80);
            Cookies.set("Loading Screen", "Seen", {
                  expires: tenSecondsFromNow
            });
      }
}
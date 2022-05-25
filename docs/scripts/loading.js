// loading.js 

const hideSplash = () => {
      if (Cookies.get("Loading Screen") == "Seen") {
            $(".load").hide();
      }
}

document.addEventListener("DOMContentLoaded", function () {
      hideSplash();
      AOS.init({
            once: false,
            mirror: true,
            duration: 1500,
            anchorPlacement: "top-bottom",
      });
});

/**
 * @param {integer} count_to - The number to count to. (required)
 * 
 */
function onsetload(count_to) {
      var oneSecondFromNow = new Date().getTime() + 1000;
      const status = Cookies.get("Loading Screen");
      if (status == "Seen") {
            $(".post_load").fadeIn("slow");
      } else {
            var start_count = 0;
            var counter = setInterval(function () {
                  $(".counter").text(start_count + "%");
                  start_count += 2;
                  $(".counter").css("font-size", "+=0.7px");
                  if (start_count == count_to) {
                        clearInterval(counter);
                        $(".counter").text(count_to + "%");
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
                  expires: oneSecondFromNow
            });
      }
}
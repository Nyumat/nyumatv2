// loading.js

// Refactor for v2. It was a mess before but we made it work cleanly now.

/**
 * @param {integer} count_to
 */

function onsetload(count_to) {
      
      if ($("#loading").length > 0) {

            document.getElementById("loading").style.display = "block";
            var start_count = 0;
            var counter = setInterval(function() {
                  $(".counter").text(start_count + "%");
                  start_count++;
                  $(".counter").css("font-size", "+=0.7px");
      
                  if (start_count == count_to) {
                        clearInterval(counter);
                        $(".counter").text(count_to);
                        setTimeout(function() {
                              $("#loading").fadeOut(500);
                              $(".counter").fadeOut(500);
                        }
                        , 500);
                  }
            }, 80);
            setTimeout(function() {
                  clearInterval(counter);
                  $(".post_load").fadeIn(500);
            }, count_to * 92);

      } else {
            $(".post_load").fadeIn(500);
      }
}
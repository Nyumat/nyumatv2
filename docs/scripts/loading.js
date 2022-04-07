/**
 * Major revamp coming soon. This got messy once i removed the loader
 * So i'm going to try to make it cleaner.
 */
const random_number = () => {
      return Math.floor(Math.random() * 9) + 1;
};

const random_number_index = () => {
      return Math.floor(Math.random() * 4) + 1;
};

const display_loader = (index_load) => {
      $(document).ready(function () {
            var count = 0;
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
                  }
             }, 80);
       });
 }

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


function hideLoader() {
      $("body").css("overflow", "auto");
      $(".counter").fadeOut(0);
      $(".load").fadeOut(0);
      $(".post_load").fadeIn(1000);
      AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            anchorPlacement: "top-bottom",
      });
      
}




if (document.cookie.includes("seenb4")) {
      //window.onload = display_loader(101);
      //window.onload = display_loading(101, 101, is_index);
      $(document).ready(function () {
            $(".load").hide(0);
            $(".counter").hide(0);
            $(".post_load").fadeIn(1000);
            AOS.init({
                  once: false,
                  mirror: true,
                  duration: 1000,
                  anchorPlacement: "top-bottom",
            });
      });

      
} else {
      $(document).ready(function () {
            $(".load").hide(0);
            $(".counter").hide(0);
            $(".post_load").fadeIn(1000);
            AOS.init({
                  once: false,
                  mirror: true,
                  duration: 1000,
                  anchorPlacement: "top-bottom",
            });
      });

      document.cookie = "seenb4=true" + ";path=/";
      // Fade in the content
      //window.onload = display_loader(101);
}


      // // Create new cookie to expire in 1 minute.
      // const date = new Date();
      // date.setTime(date.getTime() + (1 * 60 * 1000));
      // const expires = "; expires=" + date.toGMTString();
      // document.cookie = "load_time=" + expires + "; path=/;";

      // // If the cookie contains the load_time, then the user has already seen the loading screen.
      // if (document.cookie.includes("load_time")) {
      //       console.log("Welcome Back!");
      // } else {
      //       // Make visibility of loading screen visible.
      //       $(".load").css("visibility", "visible");
      //       console.log("Welcome!");
      //       display_loading(101, 101, is_index);

      //       $(".load").css("visibility", "hidden");
      //       $(".counter").css("visibility", "hidden");
      // }




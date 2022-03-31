$(document).ready(function () {
      count = 0;
      $('.post_load').hide(0);
      counter = setInterval(function () {
            if (count < 125) {
                  count+=1;
                  if (count % 2 == 0){count+=2;} else {count ++;}
            } else {
                  $('.counter').fadeOut(0);
                  $('.load').fadeOut(0);
                  clearInterval(counter);
                  $('.post_load').fadeIn(1000);
            }
      }, 80)});


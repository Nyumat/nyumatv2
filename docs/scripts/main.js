const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["vast", "fun", "a journey", "LIFE!"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 800; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
      if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
      } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
      }
}

function erase() {
      if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
      } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
      }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 250);
});



      

window.onload = () => {
      // Show a black screen on load
      fadeInBody();
      fadeInLoaderInner();
}


function fadeInBody() {
      var fadeTarget = document.getElementById("body");
      var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
      }
      if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
      } else {
            clearInterval(fadeEffect);
      }
      }, 100);
   
}

function fadeInLoaderInner() {
      var fadeTarget = document.getElementById("loader-inner");
      var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
      }
      if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
      } else {
            clearInterval(fadeEffect);
      }
      }, 100);
}
            

function fadeOut() {
      var fadeTarget = document.getElementById("loader-inner");
      var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) - 0.1;
      } else {
            clearInterval(fadeEffect);
      }
      }, 100);
   
}
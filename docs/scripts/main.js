const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["this.", "fun.", "vast.", "LIFE!"];
const typingDelay = 135;
const erasingDelay = 150;
const newTextDelay = 800; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function setGithubStats() {
      document.getElementById('github-stats').innerHTML = marked.parse(`![Nyumat's GitHub stats](https://github-readme-stats.vercel.app/api?username=nyumat&show_icons=true&theme=radical&hide=contribs&count_private=true)`);
}

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


function fadeOut(id) {
      var fadeTarget = document.getElementById(id);
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

function fadeIn(target) {
      var fadeTarget = document.getElementById(target);
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

window.onscroll = function () {
      if (window.scrollY < 50 || window.scrollY >= document.body.scrollHeight - window.innerHeight) {
            $("#btm_nav_bar").fadeIn("slow");
            $("#nav_bar").fadeIn("slow");
      } else {
            $("#btm_nav_bar").fadeOut("slow");
            $("#nav_bar").fadeOut("slow");
      }
}

document.addEventListener("DOMContentLoaded", function () {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
      if (window.location.href.indexOf("contact.html") > -1) {
            setGithubStats();
      } 
});

window.onbeforeunload = function () {
      window.scrollTo(0, 0);
}
const data = document.getElementById("date");
const header = document.getElementById("paper-main-heading");
const r = document.querySelector(":root");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.querySelector("body");
const laptop1 = document.getElementById("laptop1");
const laptop2 = document.getElementById("laptop2");
const laptop3 = document.getElementById("laptop3");
const laptop4 = document.getElementById("laptop4");
const laptop5 = document.getElementById("laptop5");

var headerHeight = "20vh";
var headerFontSize = "100px";
let darkState = false;
const darkSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>`;
const lightSVG = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

function setDark() {
  r.style.setProperty("--primary-color", "#fff");
  r.style.setProperty("--secondary-color", "#fff");
  r.style.setProperty("--accent-color", "#222");
  body.style.backgroundImage = "url('assets/background-paper-black.jpeg')";
}

function setLight() {
  r.style.setProperty("--primary-color", "#222");
  r.style.setProperty("--secondary-color", "#1c1f33");
  r.style.setProperty("--accent-color", "#fff");
  body.style.backgroundImage = "url('assets/background-paper.jpeg')";
}

function toggleDarkMode() {
  darkState = !darkState;
  if (darkState) {
    setDark();
    darkModeToggle.innerHTML = lightSVG;
  } else {
    setLight();
    darkModeToggle.innerHTML = darkSVG;
  }
}

const date = new Date();

const formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

data.innerText = formattedDate;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

var intervalId;

function startInterval() {
  intervalId = setInterval(function () {
    plusDivs(1);
  }, 15000);
}

startInterval();

laptop1.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
});

laptop1.addEventListener("mouseleave", function() {
  startInterval();
});

laptop2.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
});

laptop2.addEventListener("mouseleave", function() {
  startInterval();
});

laptop3.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
});

laptop3.addEventListener("mouseleave", function() {
  startInterval();
});

laptop4.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
});

laptop4.addEventListener("mouseleave", function() {
  startInterval();
});

laptop5.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
});

laptop5.addEventListener("mouseleave", function() {
  startInterval();
});

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const maxWidth = window.innerWidth;

  if (maxWidth <= 728) {
    headerHeight = "10vh";
    headerFontSize = "80px";
  }

  gsap.to(header, {
    duration: 2,
    height: headerHeight,
    fontSize: headerFontSize,
    ease: "power2.out",
  });

  new TypeIt("#typer", {
    lifeLike: false,
    speed: 0,
    loop: true,
  })
    .type("S")
    .pause(181)
    .type("t")
    .pause(154)
    .type("u")
    .pause(55)
    .type("d")
    .pause(183)
    .type("e")
    .pause(77)
    .type("n")
    .pause(224)
    .type("t")
    .pause(293)
    .delete(1)
    .pause(518)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(35)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(452)
    .type("P")
    .pause(446)
    .type("r")
    .pause(79)
    .type("o")
    .pause(285)
    .type("g")
    .pause(185)
    .type("r")
    .pause(70)
    .type("a")
    .pause(244)
    .type("m")
    .pause(116)
    .type("m")
    .pause(165)
    .type("e")
    .pause(181)
    .type("r")
    .pause(532)
    .delete(1)
    .pause(516)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(35)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(36)
    .delete(1)
    .pause(512)
    .type("F")
    .pause(191)
    .type("u")
    .pause(229)
    .type("l")
    .pause(109)
    .type("l")
    .pause(206)
    .type(" ")
    .pause(241)
    .type("S")
    .pause(128)
    .type("t")
    .pause(108)
    .type("a")
    .pause(135)
    .type("c")
    .pause(224)
    .type("k")
    .pause(184)
    .type(" ")
    .pause(307)
    .type("W")
    .pause(206)
    .type("e")
    .pause(162)
    .type("b")
    .pause(163)
    .type(" ")
    .pause(181)
    .type("D")
    .pause(185)
    .type("e")
    .pause(148)
    .type("v")
    .pause(116)
    .type("e")
    .pause(194)
    .type("l")
    .pause(171)
    .type("o")
    .pause(144)
    .type("p")
    .pause(95)
    .type("e")
    .pause(179)
    .type("r")
    .pause(510)
    .delete(1)
    .pause(518)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(35)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(35)
    .delete(1)
    .pause(31)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(36)
    .delete(1)
    .pause(30)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(41)
    .delete(1)
    .pause(27)
    .delete(1)
    .pause(733)
    .type("B")
    .pause(240)
    .type("e")
    .pause(215)
    .type("a")
    .pause(137)
    .type("t")
    .pause(231)
    .type("b")
    .pause(177)
    .type("o")
    .pause(106)
    .type("x")
    .pause(222)
    .type("e")
    .pause(200)
    .type("r")
    .pause(253)
    .delete(1)
    .pause(513)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(34)
    .delete(1)
    .pause(33)
    .delete(1)
    .pause(32)
    .delete(1)
    .pause(34)
    .delete(1)
    .go();
});

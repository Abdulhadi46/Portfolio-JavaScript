/* Second Nav Bar Hide Display Function */

// let y = document.querySelector(".nav2");
// function toggleDisplay() {
//   y.style.display = "block";
// }
// function hideToggle() {
//   y.style.display = "none";
// }

/* Slider Functions */

const slides = document.querySelectorAll(".slide");
let counter = 0;
let spanChecker = document.querySelector("#slide-btn-span");
let spanNumber = document.querySelector("#slidebtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  if (counter >= 2) return;
  counter++;
  // spanChecker.innerHTML = counter + 1;

  slideImage();
  spanCheck();
};
const goPrev = () => {
  if (counter <= 0) return;
  // spanChecker.innerHTML = counter - 1;

  counter--;
  // spanChecker.innerHTML = counter - 1;

  slideImage();
  spanCheck();
};

const spanCheck = () => {
  if (counter === 0) {
    spanChecker.innerHTML = `${counter + 1}`;
  } else if (counter === 1) {
    spanChecker.innerHTML = `${counter + 1}`;
  } else {
    spanChecker.innerHTML = `${counter + 1}`;
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function color1() {
  document.documentElement.style.setProperty("--primary_color", "#28e98c");
}
function color2() {
  document.documentElement.style.setProperty("--primary_color", "yellow");
}
function color3() {
  document.documentElement.style.setProperty(
    "--primary_color",
    "rgb(0, 183, 255)"
  );
}
function color4() {
  document.documentElement.style.setProperty("--primary_color", "#fafafa");
}
function color5() {
  document.documentElement.style.setProperty("--primary_color", "#1338f3");
}
function color6() {
  document.documentElement.style.setProperty("--primary_color", "#f31313");
}
function color7() {
  document.documentElement.style.setProperty("--primary_color", "#FF99CC");
}
function color8() {
  document.documentElement.style.setProperty("--primary_color", "#FE6F1D");
}

let loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
    document.querySelector("body").style.display = "block";
  }, 1000);
});

//  Videos Section JavaScript

function configHide() {
  gearDisplay.style.display = "none";
}

let videos = document.querySelector("video");
let body = document.querySelector("body");

videos.style.display = "none";

function changeVideo() {
  videos.style.display = "block";
  videos.src = "videos/earth-line.mp4";
  videos.style.opacity = "1";
  configHide();
}

function changeVideo2() {
  videos.src = "videos/vido2.mp4";
  videos.style.opacity = ".1";
  configHide();
}

function changeVideo3() {
  videos.src = "videos/back-3.mp4";
  videos.style.opacity = ".1";

  configHide();
}

function changeVideo4() {
  videos.src = "videos/back-4.mp4";
  videos.style.opacity = "1";

  configHide();
}

function changeVideo5() {
  videos.style.display = "none";
  configHide();
}
function changeVideo6() {
  videos.src = "videos/back-6.mp4";
  // videos.style.opacity = "1";

  configHide();
}

// Configration

let gearDisplay = document.querySelector(".configration");

function configDisplay() {
  gearDisplay.style.display = "block";
}

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".nav2");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

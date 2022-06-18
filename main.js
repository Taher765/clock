var btnDarkMode = document.getElementById("dark-mode");
var hurs = document.getElementById("hurs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var timing = document.getElementById("timing");
var body = document.body;

// Chage Mode 
function changeMode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btnDarkMode.innerHTML = "White Mode";
  } else {
    btnDarkMode.innerHTML = "Dark Mode";
  }
}


// start hours
setInterval(function clockApp() {
var clock = new Date();

  if (clock.getHours() < 10) {
    hurs.innerHTML = "0" + clock.getHours();
  } else if (clock.getHours() > 12) {
    hurs.innerHTML = clock.getHours() - 12;
  } else {
    hurs.innerHTML = clock.getHours();
  }


  // start minutes
  if (clock.getMinutes() < 10) {
    min.innerHTML = "0" + clock.getMinutes();
  } else {
    min.innerHTML = clock.getMinutes();
  }

  // start seconds
  if (clock.getSeconds() < 10) {
    sec.innerHTML = "0" + clock.getSeconds();
  } else {
    sec.innerHTML = clock.getSeconds();
  }

  // start Timing
  if (clock.getHours() < 12) {
    timing.innerHTML = "AM";
  } else {
    timing.innerHTML = "PM";
  }
}, 500);
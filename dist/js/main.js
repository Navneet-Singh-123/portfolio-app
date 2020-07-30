// Select items from the DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    // Set menu state
    showMenu = false;
  }
}

function initMap() {
  var pune = { lat: 18.5204, lng: 73.8567 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: pune,
  });

  var contentString =
    '<div id="content" style="color: black">' +
    "<p>402, Nightingale, Nyati Enclave, Near DPS, Mohammedwadi</p>";
  ("</div>");

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  var marker = new google.maps.Marker({
    position: pune,
    map: map,
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
}

// Typing effect

// constructor function
const TypeWriter = function (txtElement, words) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = ""; // The current words showing up in that area
  this.wordIndex = 0;
  this.type(); // Method associated with this type writer that does everything
};

// Type method
TypeWriter.prototype.type = function () {
  // Get the current index of the word
  const current = this.wordIndex % this.words.length;
  // get full text of cuurent word
  const fulltext = this.words[current];

  // Add a char
  this.txt = fulltext.substring(0, this.txt.length + 1);

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  // initital Typespeed
  let typeSpeed = 120;

  // If word is complete
  if (this.txt === fulltext) {
    // Make pause at end
    typeSpeed = 0;
  }

  // Want to run this at a certain pace
  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  // Init TypeWriter
  new TypeWriter(txtElement, words);
}

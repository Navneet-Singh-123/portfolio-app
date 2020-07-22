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

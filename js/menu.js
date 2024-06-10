window.onload = function () {
  var icon = document.getElementById("icon");
  var navLinks = document.getElementById("nav-links");
  icon.addEventListener('click', function () {
    if (navLinks.style.display === "none") {
      navLinks.style.display = "block";
    } else {
      navLinks.style.display = "none";
    }
  });
}
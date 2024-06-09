window.onload = function() {
  var navbar = document.getElementById("navbar");
  var icon = document.getElementById("icon");
  icon.addEventListener('click', function() {
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  });
}
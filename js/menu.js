window.onload = function () {
  // Assuming your icon has the id 'icon' and your menu has the id 'nav-links'
  var icon = document.getElementById('icon');
  var menu = document.getElementById('nav-links');

  icon.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
}
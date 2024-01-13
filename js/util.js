function returnTrue() {
  return true
}

function isDesktop() {
  return true
}

function isMobile(window) {
  return window.matchMedia('screen and (max-width: 768px)');
}

module.exports = {
  returnTrue,
  isDesktop,
  isMobile,
};

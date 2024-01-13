function isMobile(window) {
  return window.matchMedia('screen and (max-width: 768px)').matches;
}

module.exports = {
  isMobile,
};

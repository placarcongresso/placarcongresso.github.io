const iframeElement = document.getElementById('iframe-ranking');
if (iframeElement) {
  window.addEventListener('resize', () => {
    const iframeWidth = iframeElement.offsetWidth;
    const iframeHeight = iframeWidth * 9.2;

    iframeElement.style.height = iframeHeight + 'px';
  });
  window.dispatchEvent(new Event('resize')); // Trigger initial resize event

  const loadingCircle = document.getElementById('loading-div');
  iframeElement.addEventListener('load', () => {
    loadingCircle.style.display = 'none';
  });
}

const contentIframe = document.getElementById('content-iframe');
if (contentIframe) {
  window.addEventListener('resize', () => {
    const iframeWidth = contentIframe.offsetWidth;
    const iframeHeight = iframeWidth * 0.68;

    contentIframe.style.height = iframeHeight + 'px';
  });
  window.dispatchEvent(new Event('resize')); // Trigger initial resize event

  const loadingCircle = document.getElementById('loading-div');
  contentIframe.addEventListener('load', () => {
    loadingCircle.style.display = 'none';
  });
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.floating-bar ul');

hamburgerMenu.addEventListener('click', () => {
  navLinks.style.transform = navLinks.style.transform === 'translateX(0%)' ? 'translateX(-100%)' : 'translateX(0%)';
});
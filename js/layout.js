const iframeElement = document.getElementById('content-iframe');

window.addEventListener('resize', () => {
  const iframeWidth = iframeElement.offsetWidth;
  const iframeHeight = iframeWidth * 6.90; // Adjust this value for desired aspect ratio

  iframeElement.style.height = iframeHeight + 'px';
});

window.dispatchEvent(new Event('resize')); // Trigger initial resize event

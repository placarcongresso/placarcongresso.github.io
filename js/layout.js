const iframeElement = document.getElementById('iframe-ranking');

window.addEventListener('resize', () => {
  const iframeWidth = iframeElement.offsetWidth;
  const iframeHeight = iframeWidth * 6.95;

  iframeElement.style.height = iframeHeight + 'px';
});

window.dispatchEvent(new Event('resize')); // Trigger initial resize event

const content = document.getElementById('content-iframe');

window.addEventListener('resize', () => {
  const iframeWidth = content.offsetWidth;
  const iframeHeight = iframeWidth * 0.68;

  content.style.height = iframeHeight + 'px';
});

window.dispatchEvent(new Event('resize')); // Trigger initial resize event

const iframeElement = document.getElementById('iframe-ranking');
if (iframeElement) {
  window.addEventListener('resize', () => {
    const iframeWidth = iframeElement.offsetWidth;
    // Power BI report canvas is 1050px wide × 9950px tall. Match that aspect
    // ratio so the report fits to width and the iframe is exactly tall enough,
    // avoiding Power BI's own internal vertical scrollbar.
    const iframeHeight = iframeWidth * (8740 / 1050);

    iframeElement.style.height = iframeHeight + 'px';
  });
  window.dispatchEvent(new Event('resize')); // Trigger initial resize event

  const loadingCircle = document.getElementById('loading-div');
  iframeElement.addEventListener('load', () => {
    loadingCircle.style.display = 'none';
  });
}

const iframeElementSenate = document.getElementById('iframe-ranking-senate');
if (iframeElementSenate) {
  window.addEventListener('resize', () => {
    const iframeWidth = iframeElementSenate.offsetWidth;
    const iframeHeight = iframeWidth * 1.6;

    iframeElementSenate.style.height = iframeHeight + 'px';
  });
  window.dispatchEvent(new Event('resize')); // Trigger initial resize event

  const loadingCircle = document.getElementById('loading-div');
  iframeElementSenate.addEventListener('load', () => {
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
const isMobile = window.matchMedia('screen and (max-width: 768px)');

const iframeElement = document.getElementById('iframe-ranking');
if (iframeElement) {
  window.addEventListener('resize', () => {
    const iframeWidth = iframeElement.offsetWidth;
    const iframeHeight = iframeWidth * 6.95;

    iframeElement.style.height = iframeHeight + 'px';
  });
  window.dispatchEvent(new Event('resize')); // Trigger initial resize event

  const loadingCircle = document.getElementById('loading-div');
  iframeElement.addEventListener('load', () => {
    loadingCircle.style.display = 'none';
  });

  if (isMobile.matches) {
    console.log("This is mobile");
    iframeElement.src = 'https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSection71b50ba615d17479414a';
  } else {
    console.log("This is desktop");
    iframeElement.src = 'https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSectioncab5881aaee03387ae73';
  }
  isMobile.addEventListener('change', (event) => {
    if (event.matches) {
      console.log("This is mobile");
      iframeElement.src = 'https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSection71b50ba615d17479414a';
    } else {
      console.log("This is desktop");
      iframeElement.src = 'https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSectioncab5881aaee03387ae73';
    }
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

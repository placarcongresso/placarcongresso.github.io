function isMobile(window) {
  return window.matchMedia('screen and (max-width: 768px)').matches;
}

function rankingURL(window) {

  if (isMobile(window)) {
    return "https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSection71b50ba615d17479414a";
  }

  return "https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSectioncab5881aaee03387ae73";
}

module.exports = {
  isMobile,
  rankingURL,
};

/**
 * @jest-environment jsdom
 */

const { isMobile, rankingURL } = require('./util');

describe('isMobile', () => {
  test('should return true if width is less than 768px', () => {
    setWindowWidth(window, 720);

    expect(isMobile(window)).toBe(true);
  });

  test('should return true if width is equal to 768px', () => {
    setWindowWidth(window, 768);

    expect(isMobile(window)).toBe(true);
  });

  test('should return false if width is greater than 768px', () => {
    setWindowWidth(window, 800);

    expect(isMobile(window)).toBe(false);
  });
});


describe('rankingURL', () => {
  wantMaxWidth = 768;

  mobileURL = "https://app.powerbi.com/view?r=eyJrIjoiOTYwYmYyYWEtYzRmYi00M2EwLWFjYjgtYjJiMDc5ZTg0ODk4IiwidCI6IjhhN2VkZTZhLWU0MjgtNGE5ZS04NzJkLWIwMjdkNGUxMDM1MCJ9&pageName=ReportSection71b50ba615d17479414a"

  test('should return mobile version when on mobile', () => {
    setWindowWidth(window, 720);

    expect(rankingURL(window)).toBe(mobileURL);
  });
});


function setWindowWidth(window, width) {
  mobileWidth = 768;

  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: window.innerWidth <= mobileWidth,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
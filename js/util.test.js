/**
 * @jest-environment jsdom
 */

const { isMobile } = require('./util');

describe('isMobile', () => {
  test('should return true for max-width 768px', () => {
    // Mock window.matchMedia
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === 'screen and (max-width: 768px)',
    }));

    expect(isMobile(window)).toBe(true);
  });

});
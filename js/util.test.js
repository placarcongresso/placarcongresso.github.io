const returnTrue = require('./util');

describe("Layout function", () => {
  test('Should return true', () => {
    expect(returnTrue()).toBe(true);
  });
});
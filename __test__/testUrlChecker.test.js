// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker"

//Testing a valid URL
describe("Check a valid URL", () => {
  test('Testing a valid URL', () => {
      const inputUrl = 'https://www.udacity.com';
      const response = true;
      expect(checkForUrl(inputUrl)).toEqual(response);
  });
  test('Testing a valid URL', () => {
    const inputUrl = 'http://www.udacity.com';
    const response = true;
    expect(checkForUrl(inputUrl)).toEqual(response);
  });
});

//Testing an invalid URL
describe("Check an invalid URL", () => {
  test('Testing an invalid URL', () => {
      const inputUrl = 'www.udacity.com';
      const response = false;
      expect(checkForUrl(inputUrl)).toEqual(response);
  });
  test('Testing an invalid URL', () => {
    const inputUrl = 'udacity.com';
    const response = false;
    expect(checkForUrl(inputUrl)).toEqual(response);
  });
  test('Testing an invalid URL', () => {
    const inputUrl = 'udacity . com';
    const response = false;
    expect(checkForUrl(inputUrl)).toEqual(response);
  });
});

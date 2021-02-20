// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker"
require("babel-core/register");
require("babel-polyfill");

// the test with http/https protocol in the URL
describe("with url protocol", () => {
    test("should return true", () => {
      const input = "https://www.google.com.br";
      expect(checkUrl(input)).toBe(true);
    });
    test("should return true", () => {
      const input = "http://www.google.com.br";
      expect(checkUrl(input)).toBe(true);
    });
  });
  
  // the test without http/https protocol in the URL
  describe("without protocol", () => {
    test("should return true", () => {
      const input = "www.google.com.br";
      expect(checkUrl(input)).toBe(false);
    });
    test("should return true", () => {
      const input = "google.com.br";
      expect(checkUrl(input)).toBe(false);
    });
    test("should return false", () => {
      const input = "google . com . br";
      expect(checkUrl(input)).toBe(false);
    });
  });

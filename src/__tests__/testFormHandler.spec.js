// Import the js file to test
import { polarityText } from "../src/client/js/formHandler";
require("babel-core/register");
require("babel-polyfill");

describe("Testing the polarityText function", () => {
    test("testing the conversion of the API response to text", () => {
        expect(polarityText("P")).toEqual("POSITIVE")
    });
});
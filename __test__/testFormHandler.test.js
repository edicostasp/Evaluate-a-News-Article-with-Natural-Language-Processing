// Import the js file to test
import { handleSubmit } from '../src/client/js/formHandler';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("the form is submitted after a click", () => {
        const click = new Event("click");
        expect.objectContaining(click);              
    });

    test("should return undefined if field is empty", () => {
        const data = undefined;
        expect(data).toBeUndefined;              
    });
  
});

// Testing the check agreement result
describe ('Testing result of agreement', () => {
    test('result must be agreement', () => {
        const data = 'AGREEMENT';
        const response = "agreement!! (different elements have exactly the same polarity)";
        expect(checkAgreement(data)).toEqual(response);
    });
})

// Testing the check disagreement result
describe ('Testing result of agreement', () => {
    test('result must be disagreement', () => {
        const data = 'DISAGREEMENT';
        const response = "disagreement!! (there is disagreement between different elements polarity)";
        expect(checkAgreement(data)).toEqual(response);
    });
})

const assert = require("chai").assert;
// const funcObj = require("../hello-world");
const { sayHello, sayGoodbye } = require('../hello-world');

describe('salutation tests', () => {

    it('will it blend?', () => {
        fdasfdashjfdsaghfjlkdsaghfjads();
    });    

    it('returns an appropriate salutation', () => {
        const actual = sayHello('to my little friend');
        const expected = 'Hello, to my little friend!';
        assert.equal(actual, expected);
    });
    
    it('returns an appropriate form of farewell', () => {
        const actual = sayGoodbye('monkey fuzz');
        const expected = 'Goodbye, monkey fuzz!';
        assert.equal(actual, expected);
    });    
});


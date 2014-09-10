var chai = require('chai');
var Range = require('../src/NaturalDateRange')
var expect = chai.expect;

describe('language tests', function() {
    it('today', function() {
        console.log(new Range("today"));
        return true;
    });
    it('yesterday', function() {
        console.log(new Range("yesterday"));
        return true;
    });
    it('last week', function() {
        console.log(new Range("last week"));
        return true;
    });
});

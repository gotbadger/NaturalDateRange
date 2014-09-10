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
    it('last 7 days', function() {
        console.log(new Range("last 7 days"));
        return true;
    });
    it('<date> to <date>', function() {
        console.log(new Range("2014-01-01 to 2014-02-01"));
        return true;
    });
    it('between <date> and <date>', function() {
        console.log(new Range("between 2014-01-01 and 2014-02-01"));
        return true;
    });
});

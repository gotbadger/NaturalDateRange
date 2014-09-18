var chai = require('chai');
var Range = require('../src/NaturalDateRange')
var expect = chai.expect;
//use moment to test most date asumptions
var moment = require('moment');

describe('language tests', function() {
    it('today', function() {
        var r = new Range("today");
        _dateCheckHelper(r);
        return true;
    });
    it('yesterday', function() {
        var r = new Range("yesterday");
        _dateCheckHelper(r);
        return true;
    });
    it('this week', function() {
        var r = new Range("this week");
        _dateCheckHelper(r);
        return true;
    });
    it('last month', function() {
        var r = new Range("this month");
        _dateCheckHelper(r);
        return true;
    });
    it('last week', function() {
        var r = new Range("last week");
        _dateCheckHelper(r);
        return true;
    });
    it('last 7 days', function() {
        var r = new Range("last 7 days");
        _dateCheckHelper(r);
        return true;
    });
    it('last 14 days', function() {
        var r = new Range("last 14 days");
        _dateCheckHelper(r);
        return true;
    });
    it('<date> to <date>', function() {
        var r = new Range("2014-01-01 to 2014-02-01");
        _dateCheckHelper(r);
        expect(moment(r.getStart()).isSame('2014-01-01', 'day')).to.be.true;
        expect(moment(r.getEnd()).isSame('2014-02-01', 'day')).to.be.true;
        return true;
    });
    it('between <date> and <date>', function() {
        var r = new Range("between 2014-01-01 and 2014-02-01");
        _dateCheckHelper(r);
        expect(moment(r.getStart()).isSame('2014-01-01', 'day')).to.be.true;
        expect(moment(r.getEnd()).isSame('2014-02-01', 'day')).to.be.true;
        expect(true).to.be.true;
        return true;
    });
});

var _dateCheckHelper = function(r){
    expect(r.getStart()).to.be.an.instanceof(Date);
    expect(r.getEnd()).to.be.an.instanceof(Date);
};
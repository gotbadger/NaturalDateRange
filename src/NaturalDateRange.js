var moment = require('moment');

var NaturalDateRange = function (languageString){
    //console.log("proessing",languageString);
    //from to
    //languageString.match(regex)
    var self = this;
    self._start = undefined;
    self._end = undefined;
    LanguageRules.forEach(function(elm){
        var match = languageString.match(elm.regex);
        if(match){
            var rst = elm.parse(match);
            self._start = rst[0];
            self._end = rst[1];
            return self;
        }
    });
    if(self._start === undefined || self._end === undefined){
        throw new Error("Invalid Date Range String");
    }
};

NaturalDateRange.prototype.getStart = function(){ 
    return this._start;
};

NaturalDateRange.prototype.getEnd = function(){ 
    return this._end;
};

// use this to define match lookups
var MatchFragment = function(regex, fn){
    this.raw = regex;
    this.regex = new RegExp(regex);
    this.parse = fn;
};

/*
today
yesterday
last week
last month
this month
this week
xxx to xxx
between xxx and xxx
last 7 days
last 3 months
*/

//define all the rules
var LanguageRules = [
    new MatchFragment("today", function(){
        return[moment().startOf('day').toDate(),new Date()];
    }),
    
    new MatchFragment("yesterday", function(){
        var y = moment().subtract(1,'days');
        return[moment(y).startOf('day').toDate(),moment(y).endOf('day').toDate()];
    }),

    new MatchFragment("last (week|month|year)", function(capture){
        var period = capture[1];
        var y = moment().subtract(1,period);
        return[moment(y).startOf(period).toDate(),moment(y).endOf(period).toDate()];
    }),

    new MatchFragment("last ([0-9]) (days|weeks|months|years)", function(capture){
        var value = capture[1];
        var period = capture[2];
        var d = moment().subtract(value,period);
        return[d.toDate(),new Date()];
    }),

    new MatchFragment("this (week|month|year)", function(capture){
        var period = capture[1];
        var d = moment().subtract(1,period);
        return[moment(d).startOf(period).toDate(),new Date()];
    }),

    //
    // find 'some date to some date' - will try and use moment to decode the individual strings
    new MatchFragment("(.*).+?(?=to)to (.*)", function(capture){
        return[moment(capture[1]).startOf('day').toDate(),moment(capture[2]).endOf('day').toDate()];
    }),

    // find 'between some date and some date' - will try and use moment to decode the individual strings
    new MatchFragment("between (.*).+?(?=and)and (.*)", function(capture){
        return[moment(capture[1]).startOf('day').toDate(),moment(capture[2]).endOf('day').toDate()];
    })
]
/*

*/


module.exports = NaturalDateRange;
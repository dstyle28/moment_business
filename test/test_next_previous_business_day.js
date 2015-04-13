'use strict';


describe("Test for next business days", function() {
    it("Wednesday", function() {
        expect(moment('2015-4-1', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2015-4-2');
    });
    it("Friday", function() {
        expect(moment('2015-4-3', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2015-4-6');
    });
    it("Saturday", function() {
        expect(moment('2015-4-4', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2015-4-6');
    });
    it("Sunday", function() {
        expect(moment('2015-4-5', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2015-4-6');
    });
    it("Holiday", function() {
        expect(moment('2015-1-1', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2015-1-2');
    });
    it("Holiday is Friday", function() {
        expect(moment('2016-1-1', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2016-1-4');
    });
    it("Holiday is Weekend", function() {
        expect(moment('2017-1-1', 'YYYY-M-D').nextBusinessDay().format('YYYY-M-D')).toBe('2017-1-3');
    });
});


describe("Test for previous business days", function() {
    it("Thursday", function() {
        expect(moment('2015-4-2', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2015-4-1');
    });
    it("Monday", function() {
        expect(moment('2015-4-6', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2015-4-3');
    });
    it("Saturday", function() {
        expect(moment('2015-4-4', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2015-4-3');
    });
    it("Sunday", function() {
        expect(moment('2015-4-5', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2015-4-3');
    });
    it("Previous day is Holiday", function() {
        expect(moment('2015-1-2', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2014-12-31');
    });
    it("Monday with previous Friday is holiday", function() {
        expect(moment('2016-1-4', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2015-12-31');
    });
    it("Tuesday with Monday is holiday", function() {
        expect(moment('2017-1-3', 'YYYY-M-D').previousBusinessDay().format('YYYY-M-D')).toBe('2016-12-30');
    });
});
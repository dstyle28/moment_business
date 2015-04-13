'use strict';


describe("Test for holidaysTo", function() {
    it("No Holiday", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        var holidays = start.holidaysTo(end);
        expect(holidays.length).toBe(0);
    });
});


describe("Test for holidayDiff", function() {
    it("No Holiday", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        var holidays = start.holidayDiff(end);
        expect(holidays).toBe(0);
    });
    it("Same Day", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-1', 'YYYY-M-D');
        var holidays = start.holidayDiff(end);
        expect(holidays).toBe(0);
    });
});


describe("Test for numBusinessDayTo", function() {
    it("0", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-1', 'YYYY-M-D');
        expect(start.businessDiff(end)).toBe(0);
    });
    it("1", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        expect(start.businessDiff(end)).toBe(1);
    });
});
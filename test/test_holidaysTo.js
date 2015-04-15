'use strict';


describe("Test for holidaysTo", function() {
    it("No Holiday", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        var holidays = start.holidaysTo(end);
        expect(holidays.length).toBe(0);
    });
    it("Same start and end", function() {
        var start = moment('2015-1-1', 'YYYY-M-D');
        var end = moment('2015-1-1', 'YYYY-M-D');
        var holidays = start.holidaysTo(end);
        expect(holidays.length).toBe(0);
    });
    it("1 Holiday", function() {
        var start = moment('2014-12-29', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        var holiday = moment('2015-1-1', 'YYYY-M-D');
        var holidays = start.holidaysTo(end);
        expect(holidays.length).toBe(1);
        expect(holidays[0].isSame(holiday, 'day')).toBe(true);
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
        expect(start.holidayDiff(end)).toBe(0);
    });
    it("Same Day", function() {
        var start = moment('2014-12-31', 'YYYY-M-D');
        var end = moment('2015-1-2', 'YYYY-M-D');
        expect(start.holidayDiff(end)).toBe(1);
    });
});

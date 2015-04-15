'use strict';


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
    it("A", function() {
        var start = moment('2015-4-17', 'YYYY-M-D');
        var end = moment('2015-4-21', 'YYYY-M-D');
        expect(start.businessDiff(end)).toBe(2);
    });
    it("A", function() {
        var start = moment('2015-4-1', 'YYYY-M-D');
        var end = moment('2015-4-30', 'YYYY-M-D');
        expect(start.businessDiff(end)).toBe(21);
    });
    it("Cross holiday and weekend", function() {
        var start = moment('2014-12-29', 'YYYY-M-D');
        var end = moment('2015-1-9', 'YYYY-M-D');
        expect(start.businessDiff(end)).toBe(8);
    });
});
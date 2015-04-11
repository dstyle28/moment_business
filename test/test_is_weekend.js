'use strict';


describe("Test for isWeekend", function() {
    it("Moday", function() {
        expect(moment('2015-04-13').isWeekend()).toBe(false);
    });

    it("Tuesday", function() {
        expect(moment('2015-04-14').isWeekend()).toBe(false);
    });

    it("Wednesday", function() {
        expect(moment('2015-04-15').isWeekend()).toBe(false);
    });

    it("Thursday", function() {
        expect(moment('2015-04-16').isWeekend()).toBe(false);
    });

    it("Friday", function() {
        expect(moment('2015-04-17').isWeekend()).toBe(false);
    });

    it("Saturday", function() {
        expect(moment('2015-04-18').isWeekend()).toBe(true);
    });

    it("Sunday", function() {
        expect(moment('2015-04-19').isWeekend()).toBe(true);
    });
});
'use strict';


describe("Test for isWeekday", function() {
    it("Monday", function() {
        expect(moment('2015-04-13').isWeekday()).toBe(true);
    });

    it("Tuesday", function() {
        expect(moment('2015-04-14').isWeekday()).toBe(true);
    });

    it("Wednesday", function() {
        expect(moment('2015-04-15').isWeekday()).toBe(true);
    });

    it("Thursday", function() {
        expect(moment('2015-04-16').isWeekday()).toBe(true);
    });

    it("Friday", function() {
        expect(moment('2015-04-17').isWeekday()).toBe(true);
    });

    it("Saturday", function() {
        expect(moment('2015-04-18').isWeekday()).toBe(false);
    });

    it("Sunday", function() {
        expect(moment('2015-04-19').isWeekday()).toBe(false);
    });
});


describe("Test for isWeekend", function() {
    it("Monday", function() {
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

'use strict';


describe("hello", function() {
    it("should work", function() {
        expect(moment().format('YYYY-M-D')).toBe(moment().format('YYYY-M-D'));
    });
    it("need work", function() {
        expect(moment('2015-1-1', 'YYYY-M-D').isBusinessDay()).toBe(false);
    })
});
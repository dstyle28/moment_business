'use strict';


describe("Test for isBusinessDay", function() {
	it("New Year - 2015", function() {
		expect(moment('2015-1-1', 'YYYY-M-D').isBusinessDay()).toBe(false);
	});

    it("Xmas - 2014", function() {
        // 2015-12-25
        expect(moment([2014, 11, 25]).isBusinessDay()).toBe(false);
    });

    it("Normal Friday", function() {
        expect(moment('2015-4-3', 'YYYY-M-D').isBusinessDay()).toBe(true);
    });

    it("Saturday", function() {
        // 2015-03-29
        expect(moment([2015, 2, 28]).isBusinessDay()).toBe(false);
    });

    it("Sunday", function() {
        // 2015-03-29
        expect(moment([2015, 2, 29]).isBusinessDay()).toBe(false);
    });

    it("Normal Monday", function() {
        // 2015-04-20
        expect(moment([2015, 3, 20]).isBusinessDay()).toBe(true);
    });
});


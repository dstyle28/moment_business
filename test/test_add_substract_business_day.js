'use strict';


describe("Test for add business days", function() {
	it("Normal", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(2).format('YYYY-M-D')).toBe('2015-4-3');
	});
});
'use strict';


describe("Test for add business days", function() {
	it("+0 days", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(0).format('YYYY-M-D')).toBe('2015-4-1');
	});
	it("+2 days", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(2).format('YYYY-M-D')).toBe('2015-4-3');
	});
	it("+7 days", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(7).format('YYYY-M-D')).toBe('2015-4-10');
	});
	it("Unknown operation sign", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(1, 'unknown')).toBe();
	});
});

describe("Test for subtract business days", function() {
	it("-2 days", function() {
		expect(moment('2015-4-10', 'YYYY-M-D').subtractBusinessDay(2).format('YYYY-M-D')).toBe('2015-4-8');
	});
});
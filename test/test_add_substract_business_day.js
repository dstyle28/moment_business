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
	it("Holiday", function() {
		expect(moment('2015-1-1', 'YYYY-M-D').addBusinessDay(0).format('YYYY-M-D')).toBe('2015-1-2');
	});
	it("Cross 1 holiday", function() {
		expect(moment('2014-12-30', 'YYYY-M-D').addBusinessDay(5).format('YYYY-M-D')).toBe('2015-1-7');
	});
	it("Unknown operation sign", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').addBusinessDay(1, 'unknown')).toBe();
	});
});

describe("Test for subtract business days", function() {
	it("-0 days", function() {
		expect(moment('2015-4-1', 'YYYY-M-D').subtractBusinessDay(0).format('YYYY-M-D')).toBe('2015-4-1');
	});
	it("-1 days", function() {
		expect(moment('2015-4-10', 'YYYY-M-D').subtractBusinessDay(1).format('YYYY-M-D')).toBe('2015-4-9');
	});
	it("-4 days", function() {
		expect(moment('2015-4-10', 'YYYY-M-D').subtractBusinessDay(4).format('YYYY-M-D')).toBe('2015-4-6');
	});
	it("-5 days from Saturday", function() {
		expect(moment('2015-4-11', 'YYYY-M-D').subtractBusinessDay(5).format('YYYY-M-D')).toBe('2015-4-6');
	});
	it("-8 days from Saturday", function() {
		expect(moment('2015-4-10', 'YYYY-M-D').subtractBusinessDay(8).format('YYYY-M-D')).toBe('2015-3-31');
	});
	it("Holiday", function() {
		expect(moment('2015-1-1', 'YYYY-M-D').subtractBusinessDay(0).format('YYYY-M-D')).toBe('2014-12-31');
	});
	it("Cross 1 holiday and 1 weekend", function() {
		expect(moment('2015-1-5', 'YYYY-M-D').subtractBusinessDay(2).format('YYYY-M-D')).toBe('2014-12-31');
	});
});
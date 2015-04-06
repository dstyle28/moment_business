/*
 * moment_business
 * The MIT License (MIT)
 * https://github.com/DaveTian/moment_business
 */


US_FEDERAL_HOLIDAYS = [
  "2013-1-1", "2013-1-21", "2013-2-18", "2013-5-27", "2013-7-4", "2013-9-2", "2013-10-14", "2013-11-11", "2013-11-28", "2013-12-25",
  "2014-1-1", "2014-1-20", "2014-2-17", "2014-5-26", "2014-7-4", "2014-9-1", "2014-10-13", "2014-11-11", "2014-11-27", "2014-12-25",
  "2015-1-1", "2015-1-19", "2015-2-16", "2015-5-25", "2015-7-3", "2015-9-7", "2015-10-12", "2015-11-11", "2015-11-26", "2015-12-25",
  "2016-1-1", "2016-1-18", "2016-2-15", "2016-5-30", "2016-7-4", "2016-9-5", "2016-10-10", "2016-11-11", "2016-11-24", "2016-12-26",
  "2017-1-2", "2017-1-16", "2017-2-20", "2017-5-29", "2017-7-4", "2017-9-4", "2017-10-9",  "2017-11-10", "2017-11-23", "2017-12-25",
  "2018-1-1", "2018-1-15", "2018-2-19", "2018-5-28", "2018-7-4", "2018-9-3", "2018-10-8",  "2018-11-12", "2018-11-22", "2018-12-25",
  "2019-1-1", "2019-1-21", "2019-2-18", "2019-5-27", "2019-7-4", "2019-9-2", "2019-10-14", "2019-11-11", "2019-11-28", "2019-12-25",
  "2020-1-1", "2020-1-20", "2020-2-17", "2020-5-25", "2020-7-3", "2020-9-7", "2020-10-12", "2020-11-11", "2020-11-26", "2020-12-25",
  // More Years? Need to check moment timezone version
];

(function () {
	var moment;
	moment = this.moment;

	// businessDiff (mStartDate)
	// Copyright (c) 2014 leonardosantos
	// https://github.com/leonardosantos/momentjs-business

	moment.fn.businessDiff = function (param) {
		param = moment(param);
		var signal = param.unix() < this.unix()?1:-1;
		var start = moment.min(param, this).clone();
		var end = moment.max(param, this).clone();
		var start_offset = start.day() - 7;
		var end_offset = end.day();

		var end_sunday = end.clone().subtract(end_offset, 'd');
		var start_sunday = start.clone().subtract(start_offset, 'd');
		var weeks = end_sunday.diff(start_sunday, 'days') / 7;

		start_offset = Math.abs(start_offset);
		if(start_offset === 7) {
			start_offset = 5;
		}
		else if(start_offset === 1) {
			start_offset = 0;
		}
		else {
			start_offset -= 2;
		}

		if(end_offset === 6) {
			end_offset--;
		}

		return signal * (weeks * 5 + start_offset + end_offset);
	};

	moment.fn.isWeekday = function() {
		return this.isoWeekday() < 6;
	};

	moment.fn.isWeekend = function() {
		return this.isoWeekday() > 5;
	};

	moment.fn.isBusinessDay = function() {
		return (this.isoWeekday() < 5 && US_FEDERAL_HOLIDAYS.indexOf(this.format('YYYY-M-D')) === -1);
	};

	moment.fn.addBusinessDay = function (days, sign) {
		if (typeof sign === 'undefined') {
			sign = '+';
		}
		else if (!(sign === '-' || sign === '+')) {
			console.error('Unknown signal (' + signal + ').');
			return;
		}
		var date = this.clone();
		var signal = sign==='+'? 1:-1;
		signal = days< 0? signal*-1:signal;
		var offset = Math.abs(days);

		if (offset === 0){
			// If give day is holiday or weekend.
			while(!date.isBusinessDay()) {
				date = date.add(signal, 'days');
			}
		}
		else {
			while(offset === 0 ) {
				date = date.add(signal, 'days');
				if(date.isBusinessDay()) {
					offset-- ;
				}
			}
		}
		return date;
	};

	moment.fn.businessSubtract = function(days){
		return this.addBusinessDay(days, '-');
	};

}).call(this);

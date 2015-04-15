/*
 * moment_business
 * The MIT License (MIT)
 * https://github.com/DaveTian/moment_business
 */


var US_FEDERAL_HOLIDAYS = [
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

	moment.fn.holidaysBetween = function(moment_date) {
		var start_day = moment.min(moment_date, this);
		var end_day = moment.max(moment_date, this);
		var holidays = [];

		if (start_day.isSame(end_day, 'day') === true) {
			return holidays;
		}

		for (var i = 0; i < US_FEDERAL_HOLIDAYS.length; i++) {
			var current_holiday = moment(US_FEDERAL_HOLIDAYS[i], 'YYYY-MM-DD');
			if (current_holiday.isAfter(end_day)) {
				return holidays;
			}
			else if (current_holiday.isAfter(start_day)) {
				holidays.push(current_holiday);
			}
		}

		return holidays;
	};

	moment.fn.holidayDiff = function(moment_date) {
		var start_day = moment.min(this, moment_date);
		var end_day = moment.max(this, moment_date);

		if (start_day.isSame(end_day, 'day') === true) {
			return 0;
		}

		var signal = start_day.isBefore(end_day, 'day') ? 1 : -1;

		return (start_day.holidaysBetween(end_day).length) * signal;
	};

	moment.fn.businessDiff = function (moment_date) {
		var start_day = moment.min(this, moment_date);
		var end_day = moment.max(this, moment_date);

		if (start_day.isSame(end_day, 'day') === true) {
			return 0;
		}

		var signal = start_day.isBefore(end_day, 'day') ? 1 : -1;
		var diff_days = end_day.diff(start_day, 'day');
		var head = start_day.isoWeekday();
		var tail = end_day.isoWeekday();
		var total = diff_days + head + (7 - tail);
		var weeks = total / 7;
		var workdays = weeks * 5;
		workdays -= Math.min(5, head);
		workdays -= Math.max(0, 5 - tail);
		workdays -= start_day.holidayDiff(end_day);

		return workdays >= 0 ? workdays * signal : 0;
	};

	moment.fn.isWeekday = function() {
		return this.isoWeekday() < 6;
	};

	moment.fn.isWeekend = function() {
		return this.isoWeekday() > 5;
	};

	moment.fn.isBusinessDay = function() {
		return (this.isoWeekday() < 6 && US_FEDERAL_HOLIDAYS.indexOf(this.format('YYYY-M-D')) === -1);
	};

	moment.fn.addBusinessDay = function (days, sign) {
		if (typeof sign === 'undefined') {
			sign = '+';
		}
		else if (!(sign === '-' || sign === '+')) {
			window.console && console.error('Unknown sign (' + sign + ').');
			return;
		}
		var date = this.clone();
		var signal = sign === '+' ? 1 : -1;
		signal = days < 0 ? signal * -1 : signal;
		var offset = Math.abs(days);

		if (offset === 0){
			// If give day is holiday or weekend.
			while(!date.isBusinessDay()) {
				date = date.add(signal, 'days');
			}
		}
		else {
			while (offset !== 0) {
				date = date.add(signal, 'days');
				if(date.isBusinessDay()) {
					offset-- ;
				}
			}
		}
		return date;
	};

	moment.fn.subtractBusinessDay = function(days){
		return this.addBusinessDay(days, '-');
	};

	moment.fn.nextBusinessDay = function() {
		var date = this.clone();
		return date.addBusinessDay(1);
	};

	moment.fn.previousBusinessDay = function() {
		var date = this.clone();
		return date.subtractBusinessDay(1);
	};

}).call(this);

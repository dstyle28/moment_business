# moment-business (v1.0.1)

momnet-business is an extension library for [Moment](momentjs.com), with customiztion under US Federal Holidays and weekends.

## Build Status 
[![Circle build status](https://circleci.com/gh/dstyle28/moment_business.svg?style=shield)](https://circleci.com/gh/dstyle28/moment_business)

## Code Climate Status
[![Code Climate](https://codeclimate.com/github/dstyle28/moment_business/badges/gpa.svg)](https://codeclimate.com/github/dstyle28/moment_business)
[![Test Coverage](https://codeclimate.com/github/dstyle28/moment_business/badges/coverage.svg)](https://codeclimate.com/github/dstyle28/moment_business)

## APIs

##### `holidaysBetween(moment_date)`
	Find holidays between moment and moment_date
	@param moment_date: {moment} 
	@return {Array}

##### `holidayDiff(moment_date)`
	Calculate number(s) of holidays between moment and moment_date
	@param moment_date: {moment} 
	@return {int} - postive if moment < moment_date
	              - negative if moment > moment_date
	              - 0 if moment = moment_date
	
##### `businessDiff(moment_date)`
	Calculate number(s) of business days between moment and moment_date
	@param moment_date: {moment} 
	@return {int} - postive if moment < moment_date
	              - negative if moment > moment_date
	              - 0 if moment = moment_date
	              
##### `isWeekday()`
	Determine if moment is week day	
	@return {boolean}

##### `isBusinessDay()`
	Determine if moment is business day
	@return {boolean}

##### `isWeekend()`
	Determine if moment is Saturday or Sunday
	@return {boolean}

##### `addBusinessDay(days)`
	Mutates the original moment by adding # business days
	@param days: {int}
	@return {moment}

##### `subtractBusinessDay(days)`
	Mutates the original moment by subtracting # business days
	@param days: {int}
	@return {moment}

##### `nextBusinessDay()`
	Mutates the original moment by next business day
	@return {moment}

##### `previousBusinessDay()`
	Mutates the original moment by previous business day
	@return {moment}

## Copyright and Licence
Code and documentation copyright 2015 Zenefits. Code related under the [MIT License](https://github.com/dstyle28/moment_business/blob/master/LICENSE).
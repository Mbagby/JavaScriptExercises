var leapYear = require("../leapYear.js")

describe("Leap Year", function(){
	it("any year divisible by 100 but not divisible by 400 is NOT a leap year", function(){
		expect(leapYear.leapYear(500)).toEqual(false)
	});
	it("every year whose number is perfectly divisible by four is a leap year", function(){
		expect(leapYear.leapYear(8)).toEqual(true)
	});
	it("Years 1600, and 2000 are leap years", function(){
		expect(leapYear.leapYear(1600)).toEqual(true)
	});
	it("Years 1700, 1800, and 1900 are not leap years", function(){
		expect(leapYear.leapYear(1900)).toEqual(false)
	});
});


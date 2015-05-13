var parenthesesChecker = require("../parenthesesChecker.js")

describe("function to see if all parentheses in a function are closed", function(){
	it("If the parentheses are Not closed the string should return false", function(){
		expect("(()()))((")to.Equal("False")
	it("If the parentheses are closed the string should return true", function(){
		expect("(())()")to.Equal("True")
	})
})
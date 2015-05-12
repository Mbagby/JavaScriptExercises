var recursiveProblem = require("../recursiveProblems.js")

describe("fibonacci sequence", function(){
	it("The fourth element in the fibonacci sequence is 3", function(){
		expect(recursiveProblem.fib(4)).toEqual(3)
	});
});
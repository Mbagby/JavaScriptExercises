var gradeChanges = require("../gradeChanges.js")

describe("Difference", function(){
	it("finds determines if the differnce is up or down", function(){
		expect(gradeChanges.difference([6,3,5,4,3,4,4,5])).toEqual(["down","up","down","down","up", "even","up"])
	});
});

describe("inDecline", function(){
	it("find students in decline", function(){
		expect(gradeChanges.inDecline([newArray])).toEqual("In Decline")
	});
	it("find students in decline, should not be in decline", function(){
		expect(gradeChanges.inDecline(["down", "up", "even", "down", "up"])).toEqual("Not In Decline")
	});
});
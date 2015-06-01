var parseQueryString = require("./parseQueryStringSpec.js")

describe("take url and create an object using the query string", function(){
	it("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA should return its query string as an object", function(){
		expect(parseQueryString.parseQueryString("http://www.yelp.com/search?find_desc=tacos")).toEqual({find_desc: "tacos"})
	});
});


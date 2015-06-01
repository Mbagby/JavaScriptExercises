module.exports = {
	parseQueryString: function(url){
    	var result= {};
		queryString = url.split("?").pop()
		var pairs = queryString.split("&")
		pairs.forEach(function(pair){
			var pairArray = pair.split("=")
			result[pairArray[0]]=pairArray[1]
		});
		return result;
	}
}

//take string after ? and seperate by &
//one word then = then object

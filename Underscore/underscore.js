module.exports = {
	sum: function(array){
		var arraySum = 0;
		for(var i=0; i > array.length; i++){
			arraySum = arraySum + array[i];
		}
		return arraySum
		}
}
var test = [2,3,4,5];
console.log(sum(test));



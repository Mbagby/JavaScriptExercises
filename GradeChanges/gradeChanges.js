module.exports = {
	difference: function(array){
		var newArray= [];
		for (i=0; i<array.length; i++){
			if (array[i]>array[i+1]){
				newArray.push("down")
			}else if (array[i]<array[i+1]){
				newArray.push("up")
			}else if (array[i]===array[i+1]){
				newArray.push("even")
			}
		}
		return newArray
	},
	inDecline: function(array){
		var list = {};
		for (i=0, i<array.length; i++){
			var status = array[i];
			if (list[status]){
				list[status] += 1
			}else{
				list[status] = 1;
			}
		}
		return list [status]
	}		if 
}



var list = {};
			for (i=0; i< array.length; i++){
				var grade = array[i];
				if(list[grade]){
					list[grade] += 1 
				}else{
					list[grade] = 1;
				}
			}
			return list[grade]
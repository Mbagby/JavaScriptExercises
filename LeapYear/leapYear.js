module.exports = {
	leapYear: function(year){
		if (year % 100 ===0 && year % 400 !==0){
			return false
		}else if (year % 4 === 0){
			return true
		}else if (year === 2000, 1600){
			return true
		}else if (year === 1700, 1800, 1900){
			return false
		}else{
			return false
		}
	}
} 
var obj = (function() {

		return {

			// Write code to find the largest prime palindrome between 1 and 1000.

			largestPrimePalindrome : function(){
				var result = 0;
				for (var i = 0; i < 1000; i++ ){
					if(String(i) == obj.reverse_it(String(i)) && i > result && obj.isPrime(i))
						result = i;
				}
				return result;
			},

			reverse_it : function(string){
				var newString = [];
				var tempChar;

				for (var i = 0; i < string.length; i++){
					newString.push(string[string.length - 1 - i])
				}
				newString = newString.join('');
				return newString;
			},

			isPrime : function(num){
				var flag = true;
				if (num < 0)
					num = num * -1;
				if (num != 1 || num != 2 || num != 3){
					for (var i = 2; i < num; i++){
						if (num%i == 0)
							return false;
					}
				}
				return flag;
			}

		  };
		})();


module.exports = obj;
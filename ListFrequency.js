//Trying to list out the frequency of letters in a list
//first we need to seperate the string out by letters (split)
//Next we need to loop through the new array.
//Question: How to use count
//Change into a list

var charFreq = function(string); //Function
	string.spilt = newArray  //Split String NOOOO
	for(i=0;i<newArray.length;i++){ //For Loop
		for(n=0; n<newArray.length; i++){ //Nested For loop
		if(newArray[i] = newArray[n]){ //If Statement
			return(newArray[i] ":" //how many times) //Then statement
		}
	}
	}

//Function
//Split string NOOOOOO
//Nested for loops
//If function
//Count # of times
//Create list


function charFreq(string){
	var list = {};
	for (i=0; i< string.length; i++){
		var chara = string[i];
		if(list[chara]){ //falsey
			list[chara] += 1 
		}else{
			list[chara] = 1;
		}
	}
	return list;
}
charFreq("abaahsbbbshghggr")






var loopingATriangle = function(character,length){
	for(i=0; i=length;i++){
		return = character
	}
}

//FizzBuzz
for(i = 1; i <= 100; i++){
	if(i%15===0){
		console.log("FizzBuzz");
	}
	if(i%3===0){
		console.log("Fizz");
	}
	if(i%5===0){
		console.log("Buzz");
	} else
		console.log(i);	
}








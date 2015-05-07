var calc = require('../taxCalc.js')

//describe
//it
//expect shouldEqual

describe('Tax Calculator', function(){
//write my tax calc tests below
 it('should return .01 when given $1', function(){
 	expect (calc.calculate(1)).toEqual(.01)
 });
});
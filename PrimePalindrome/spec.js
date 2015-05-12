var primeStuff = require('../primePalindrome.js')

describe('Reverse a string', function(){
    it('should return the string flipped', function() {
        expect(primeStuff.reverse_it('Tony')).toEqual('ynoT')
        expect(primeStuff.reverse_it('1234567890')).toEqual('0987654321')
        expect(primeStuff.reverse_it('-256mel8')).toEqual('8lem652-')
    });
});

// describe('Palindrome?', function(){
//     it('shoud tell you if the word read the same backwards and forwards', function(){
//         expect(primeStuff.palindromeCheck('car')).toEqual(false)
//         expect(primeStuff.palindromeCheck('racecar')).toEqual(true)

//     });
// });

describe('Prime?', function(){
    it('returns true if arg is prime', function(){
        expect(primeStuff.isPrime(11)).toEqual(true)
        expect(primeStuff.isPrime(15)).toEqual(false)
        expect(primeStuff.isPrime(35)).toEqual(false)
        expect(primeStuff.isPrime(-11)).toEqual(false)
        expect(primeStuff.isPrime(0)).toEqual(false)
        expect(primeStuff.isPrime(11.11)).toEqual(false)
    });
});

describe('Largest Prime Palindrome', function(){
    it('finds largest prime palindrome less than 1000', function(){
        expect(primeStuff.largestPrimePalindrome()).toEqual(929)
    });
});

// describe('Prints x number of primes', function () {
//     it('returns arg number of primes', function() {
//         expect(primeStuff.primeNumberPrinter(4)).toEqual([0,1,2,3])
//         expect(primeStuff.primeNumberPrinter(0)).toEqual([])
//         expect(primeStuff.primeNumberPrinter(10)).toEqual([0,1,2,3,5,7,11])
//     });
// });
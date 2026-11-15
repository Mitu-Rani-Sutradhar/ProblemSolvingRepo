// Problem 8: Check Palindrome

function isPalindrome(str){
    let reverse = str.split('').reverse('').join('');

    return str === reverse;
}
console.log(isPalindrome('hello'));
console.log(isPalindrome('racecar'));
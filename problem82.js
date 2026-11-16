// Problem 8: Check Palindrome [Easy]

function isPalindrome(str){
    let reverse = str.split('').reverse('').join('');

    return str === reverse;
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('nanan'));
// check odd or even
// Write a function isEven(n) that returns true if a number is even, and false if it is odd.

function isEven(n){
    if( n % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));
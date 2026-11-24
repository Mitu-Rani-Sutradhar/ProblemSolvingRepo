// Problem 5: Check Positive, Negative or Zero [Easy]

function checkSign(n){
    if(n > 0){
        return 'positive';
    }
    if(n < 0){
        return 'negative';
    }
    else return 'zero';
}

console.log(checkSign(0));
console.log(checkSign(7));
console.log(checkSign(-9));
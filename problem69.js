// Check Positive, Negative or Zero

function checkSign(n){
    if( n > 0){
        return "positive";
    }
    else if( n < 0){
        return "negative";
    }
    else{
        return "zero";
    }
}

console.log(checkSign(6));
console.log(checkSign(0));
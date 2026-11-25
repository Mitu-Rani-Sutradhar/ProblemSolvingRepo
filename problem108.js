// Problem 10: Count Occurrences of a Character

function countChar(str,char){
    let count = 0;
    for(letter of str){
        if( letter === char){
            count++;
        }
    }
    return count;
}
console.log(countChar('jallaa','j'));
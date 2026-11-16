// Problem 7: Count Vowels in a String 

function countVowels(str){
    let count = 0;
    for(let char of str){
        if('aeiou'.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels('Hello'));
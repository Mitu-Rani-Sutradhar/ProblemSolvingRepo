// Problem 6: Reverse a String [Easy] Description: Write a function reverseS

function reverseString(str){
    return str.split('').reverse('').join('');
}
console.log(reverseString('hello'));
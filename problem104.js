// Problem 9: Capitalize First Letter of Each Word [Easy]

function titleCase(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(titleCase('i am'));
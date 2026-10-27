function unique(arr){

 return arr.filter(item=>arr.indexOf(item)===arr.lastIndexOf(item));

}

console.log(unique([1,2,2,3,4,4]));
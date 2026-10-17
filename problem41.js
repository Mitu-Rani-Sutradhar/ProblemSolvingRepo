// Input: [5, 10, 20, 3]
// Output: 20

function findLargest (arr){
    let largest = arr[0];

    for (let num of arr){
        if(num > largest){
            largest = num;
        }
    }
     return largest;
}

console.log(findLargest([5,10,20,3]));
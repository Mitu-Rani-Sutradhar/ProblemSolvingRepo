// Find the Largest Number
function findLargestNumber(arr){
    let largest = arr[0];q2v
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
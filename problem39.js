function findLargest(arr) {
  let largest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

console.log(findLargest([5, 10, 3, 25, 8])); // 25
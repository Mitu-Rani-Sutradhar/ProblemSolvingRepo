function findSmallest(arr) {
  let smallest = arr[0];

  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }

  return smallest;
}

console.log(findSmallest([8, 3, 10, 1]));
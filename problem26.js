function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;
  let result;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }
  }

  return result;
}

console.log(mostFrequent([1, 2, 2, 3, 2, 4, 2]));
function sumSquares(arr) {
  let sum = 0;

  for (let num of arr) {
    sum = sum + num * num;
  }

  return sum;
}

console.log(sumSquares([1, 2, 3]));
// 14
function countPositiveNegative(arr) {
  let positive = 0;
  let negative = 0;

  for (let num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    }
  }

  return { positive, negative };
}

console.log(countPositiveNegative([2, -3, 5, -1, 0, 7]));
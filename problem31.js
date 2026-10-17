function commonUnique(arr1, arr2) {
  return [...new Set(
    arr1.filter(num => arr2.includes(num))
  )];
}

console.log(commonUnique(
  [1, 2, 2, 3, 4],
  [2, 2, 3, 5]
));
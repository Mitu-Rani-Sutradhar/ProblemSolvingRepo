function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);

  return unique[1];
}

console.log(secondLargest([10, 5, 20, 8, 15]));
let numbers = [1, 2, 3, 4, 6, 7];
let count = 0;

for (let num of numbers) {
  if (num % 2 === 0) {
    count++;
  }
}

console.log(count);
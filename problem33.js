const people = [
  { name: "Mitu", age: 25 },
  { name: "Rahim", age: 35 },
  { name: "Karim", age: 30 }
];

function findOldest(people) {
  return people.reduce((oldest, person) => {
    return person.age > oldest.age ? person : oldest;
  });
}

console.log(findOldest(people));
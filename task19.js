// return the array, without duplicates, in reverse alphabetical order

const animals = ["cat", "rabbits", "dog", "lion", "cat", "rabbits", "wolf", "leopard", "tiger", "lion"];

const reverseAnimals = animals.sort().reverse();

console.log([...new Set(reverseAnimals)]);
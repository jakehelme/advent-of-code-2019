const fs = require('fs');

const calcFuel = (mass, increment = 0) => {
	return Math.floor(mass / 3) - 2;
};

const fileContent = fs.readFileSync('./day1-1-input.txt', 'utf8');
const moduleMasses = fileContent.split('\n').map(mass => Number(mass));

let total = 0;
moduleMasses.forEach((moduleMass, ind) => {
	const fuel = calcFuel(moduleMass);
	console.log(`Index: ${ind}, Fuel: ${fuel}`);
	total += fuel;
});

console.log(`Total: ${total}`);

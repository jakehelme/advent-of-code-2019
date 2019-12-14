const fs = require('fs');
const { findFewestCombinedSteps } = require('./intersections');
const { createCircuit } = require('./circuit');

(function () {
	const inputFile = fs.readFileSync('./day3/input.txt', 'utf8');
	const circuits = inputFile.split('\n');
	const path1Instructions = circuits[0].split(',');
	const path2Instructions = circuits[1].split(',');
	const c1 = createCircuit(path1Instructions);
	const c2 = createCircuit(path2Instructions);
	const result = findFewestCombinedSteps(c1,c2);
	console.info(`The fewest combined steps is ${result} steps`);

})();
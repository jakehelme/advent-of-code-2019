const instructionSet = require('./puzzleInput');
const intcodeProgramTwo = require('./intcodeProgramTwo');

(function () {
	const input = 5;
	intcodeProgramTwo(instructionSet, input);
})();
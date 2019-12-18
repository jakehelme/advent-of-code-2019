const instructionSet = require('./puzzleInput');
const intcodeProgramOne = require('./intcodeProgramOne');

(function () {
	const input = 1;
	intcodeProgramOne(instructionSet, input);
})();
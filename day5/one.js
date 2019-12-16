const instructionSet = require('./puzzleInput');
const intcodeProgram = require('./intcodeProgram');

(function () {
	const input = 1;
	intcodeProgram(instructionSet, input);
})();
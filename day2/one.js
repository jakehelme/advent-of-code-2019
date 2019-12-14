const input = require('./input');
const gravAssistIntcodeProgram = require('./gravAssistIntcodeProgram');

(function runProgram() {
	const workingSet = Object.assign([], input);
	workingSet[1] = 12;
	workingSet[2] = 2;
	const result = gravAssistIntcodeProgram(workingSet);
	console.info(`The result at pos 0 is: ${result[0]}`);
})();

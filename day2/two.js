const input = require('./input');
const gravAssistIntcodeProgram = require('./gravAssistIntcodeProgram');

function runProgram(inputs) {
	const workingSet = Object.assign([], input);
	workingSet[1] = inputs[0];
	workingSet[2] = inputs[1];
	return gravAssistIntcodeProgram(workingSet);
}

(function findNounAndVerb() {
	nounloop:
	for (let nounIndex = 0; nounIndex < 100; nounIndex++) {
		verbloop:
		for (let verbIndex = 0; verbIndex < 100; verbIndex++) {
			const result = runProgram([nounIndex, verbIndex]);
			if(result[0] === 19690720) {
				console.info(`The answer of 100 * ${nounIndex} (noun) + ${verbIndex} (verb) = ${100 * nounIndex + verbIndex}`);
				break nounloop;
			}
		}
	}
})();



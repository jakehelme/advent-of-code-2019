const intcodeProgram = require('./intcodeProgram');

function amplificationCircuit(phaseSequence, programInstructions) {
	const amp1Result = intcodeProgram(programInstructions, [phaseSequence[0], 0]);
	const amp2Result = intcodeProgram(programInstructions, [phaseSequence[1], amp1Result]);
	const amp3Result = intcodeProgram(programInstructions, [phaseSequence[2], amp2Result]);
	const amp4Result = intcodeProgram(programInstructions, [phaseSequence[3], amp3Result]);
	const amp5Result = intcodeProgram(programInstructions, [phaseSequence[4], amp4Result]);
	return amp5Result;
}

module.exports = amplificationCircuit;
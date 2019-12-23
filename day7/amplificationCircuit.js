const IntcodeProgram = require('./IntcodeProgram');

function amplificationCircuit(phaseSequence, programInstructions) {
	const amp1 = new IntcodeProgram(programInstructions);
	const amp2 = new IntcodeProgram(programInstructions);
	const amp3 = new IntcodeProgram(programInstructions);
	const amp4 = new IntcodeProgram(programInstructions);
	const amp5 = new IntcodeProgram(programInstructions);

	const [amp1Result,] = amp1.run([phaseSequence[0], 0]);
	const [amp2Result,] = amp2.run([phaseSequence[1], amp1Result]);
	const [amp3Result,] = amp3.run([phaseSequence[2], amp2Result]);
	const [amp4Result,] = amp4.run([phaseSequence[3], amp3Result]);
	const [amp5Result,] = amp5.run([phaseSequence[4], amp4Result]);
	return amp5Result;
}

function amplificationCircuitFeedback(phaseSequence, programInstructions) {

	let hasHalted = false;


	const amp1 = new IntcodeProgram(programInstructions);
	const amp2 = new IntcodeProgram(programInstructions);
	const amp3 = new IntcodeProgram(programInstructions);
	const amp4 = new IntcodeProgram(programInstructions);
	const amp5 = new IntcodeProgram(programInstructions);

	const [amp1Result, ] = amp1.run([phaseSequence[0], 0]);
	const [amp2Result, ] = amp2.run([phaseSequence[1], amp1Result]);
	const [amp3Result, ] = amp3.run([phaseSequence[2], amp2Result]);
	const [amp4Result, ] = amp4.run([phaseSequence[3], amp3Result]);
	const [amp5Result, ] = amp5.run([phaseSequence[4], amp4Result]);
	let amp1Input = amp5Result;
	let finalResult;
	while(!hasHalted) {
		const [amp1Result, ] = amp1.run([amp1Input]);
		const [amp2Result, ] = amp2.run([amp1Result]);
		const [amp3Result, ] = amp3.run([amp2Result]);
		const [amp4Result, ] = amp4.run([amp3Result]);
		const [amp5Result, amp5Halted ] = amp5.run([amp4Result]);
		amp1Input = amp5Result;
		hasHalted = amp5Halted;
		finalResult = amp5Result;
	}
	
	return finalResult;
}

module.exports = { amplificationCircuit, amplificationCircuitFeedback };
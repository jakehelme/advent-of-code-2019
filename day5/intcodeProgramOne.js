function gravAssistIntcodeProgram(instructionSet, input) {
	for (let pointer = 0; pointer < instructionSet.length; pointer += 2) {
		const instruction = instructionSet[pointer].toString();
		const opcode = instruction.substr(instruction.length - 2);
		const parameterModes = instruction.substr(0,instruction.length - 2);
		const parameter1Mode = parameterModes.substr(parameterModes.length - 1);
		const operand1 = parameter1Mode === '1' ? instructionSet[pointer + 1] : instructionSet[instructionSet[pointer + 1]];

		if(/0?[1-2]/.test(opcode)) {
			const parameter2Mode = parameterModes.length > 1 ? parameterModes.substr(parameterModes.length - 2, 1) : '0';
			const operand2 = parameter2Mode === '1' ? instructionSet[pointer + 2] : instructionSet[instructionSet[pointer + 2]];
			const resultPostion = instructionSet[pointer + 3];
			if(/0?1/.test(opcode)) { // Add
				instructionSet[resultPostion] = operand1 + operand2;
			} else { // opcode === '02 Multiply'
				instructionSet[resultPostion] = operand1 * operand2;
			} 
			pointer+=2;
		} else if(/0?[3-4]/.test(opcode)) {
			if(/0?3/.test(opcode)) { // Input
				const inputAddress = instructionSet[pointer + 1];
				instructionSet[inputAddress] = input;
			} else { // opcode === 04 // Output
				console.log(operand1);
			}
		} else if (opcode === '99') {
			console.log('HALT!');
			break;
		}
  }
  return instructionSet;
}

module.exports = gravAssistIntcodeProgram;

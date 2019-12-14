function gravAssistIntcodeProgram(input) {
	for (let pointer = 0; pointer < input.length; pointer+=4) {
		const opcode = input[pointer];
		if (opcode === 99) break;
		const operand1position = input[pointer + 1];
		const operand2position = input[pointer + 2];
		const resultPostion = input[pointer + 3];
		switch(input[pointer]) {
			case 1:
				input[resultPostion] = input[operand1position] + input[operand2position];
				break;
			case 2:
				input[resultPostion] = input[operand1position] * input[operand2position];
				break;
			default:
				throw new Error('unexpected operation');
				break;
		}
	}

	return input;
}

module.exports = gravAssistIntcodeProgram;

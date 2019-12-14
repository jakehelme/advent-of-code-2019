function gravAssistProgram(input) {
	for (let index = 0; index < input.length; index+=4) {
		const element = input[index];
		if (element === 99) break;
		const operand1position = input[index + 1];
		const operand2position = input[index + 2];
		const resultPostion = input[index + 3];
		switch(input[index]) {
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

module.exports = gravAssistProgram;

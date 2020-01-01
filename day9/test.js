const IntcodeProgram = require('./IntcodeProgram');

describe('IntcodeProgram - day 9', () => {
	test('first example', () => {
		const input = [109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99];
		const prog = new IntcodeProgram(input);
		input.forEach((_, i) => {
			let result = prog.run();
			expect(result[0]).toStrictEqual(input[i]);
			prog.reset();
		});
	});
	test('second example', () => {
		const input = [1102,34915192,34915192,7,4,7,99,0];
		const prog = new IntcodeProgram(input);
		const result = prog.run();
		expect(result[0].toString().length).toBeGreaterThanOrEqual(16)
		expect(result[0]).toBe(1219070632396864);
	});
	test('third example', () => {
		const input = [104,1125899906842624,99];
		const prog = new IntcodeProgram(input);
		const result = prog.run();
		expect(result[0]).toBe(1125899906842624);
	});
});
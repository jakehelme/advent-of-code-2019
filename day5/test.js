const intcodeProgram = require('./intcodeProgram');

describe('gravAssistIntcodeProgram', () => {
  test('example parameter mode', () => {
    const instructionSet = [1002, 4, 3, 4, 33];
    const result = intcodeProgram(instructionSet, 0);
    expect(result).toStrictEqual([1002, 4, 3, 4, 99]);
  });

  test('test input mode', () => {
    const instructionSet = [3, 0, 99];
    const result = intcodeProgram(instructionSet, 2);
    expect(result).toStrictEqual([2, 0, 99]);
	});
	
	test('output instruction', () => {
		const instructionSet = [4, 3, 99, 42];
		const spy = jest.spyOn(console, 'log');
		const result = intcodeProgram(instructionSet, 2);
		expect(result).toStrictEqual([4, 3, 99, 42]);
		expect(spy.mock.calls[0][0]).toBe(42);
		spy.mockRestore();
	});
});

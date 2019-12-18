const intcodeProgram = require('./intcodeProgramOne');
const intcodeProgramTwo = require('./intcodeProgramTwo');

// describe('gravAssistIntcodeProgram', () => {
//   test('example parameter mode', () => {
//     const instructionSet = [1002, 4, 3, 4, 33];
//     const result = intcodeProgram(instructionSet, 0);
//     expect(result).toStrictEqual([1002, 4, 3, 4, 99]);
//   });

//   test('test input mode', () => {
//     const instructionSet = [3, 0, 99];
//     const result = intcodeProgram(instructionSet, 2);
//     expect(result).toStrictEqual([2, 0, 99]);
// 	});
	
// 	test('output instruction', () => {
// 		const instructionSet = [4, 3, 99, 42];
// 		const spy = jest.spyOn(console, 'log');
// 		const result = intcodeProgram(instructionSet, 2);
// 		expect(result).toStrictEqual([4, 3, 99, 42]);
// 		expect(spy.mock.calls[0][0]).toBe(42);
// 		spy.mockRestore();
// 	});
// });

describe('intcodeProgramTwo', () => {
  test('input is equal to 8', () => {
    const instructionSet = [3,9,8,9,10,9,4,9,99,-1,8];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 8);
    expect(result).toStrictEqual([3,9,8,9,10,9,4,9,99,1,8]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
	});
	test('input is not equal to 8', () => {
    const instructionSet = [3,9,8,9,10,9,4,9,99,-1,8];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,9,8,9,10,9,4,9,99,0,8]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('input is equal to 8 - immediate mode', () => {
    const instructionSet = [3,3,1108,-1,8,3,4,3,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 8);
    expect(result).toStrictEqual([3,3,1108,1,8,3,4,3,99]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
	});
	test('input is not equal to 8 - immediate mode', () => {
    const instructionSet = [3,3,1108,-1,8,3,4,3,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,3,1108,0,8,3,4,3,99]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('input is less than 8', () => {
    const instructionSet = [3,9,7,9,10,9,4,9,99,-1,8];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,9,7,9,10,9,4,9,99,1,8]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
	});
	test('input is not less than 8', () => {
    const instructionSet = [3,9,8,9,10,9,4,9,99,-1,8];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 10);
    expect(result).toStrictEqual([3,9,8,9,10,9,4,9,99,0,8]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('input is less than 8 - immediate mode', () => {
    const instructionSet = [3,3,1107,-1,8,3,4,3,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,3,1107,1,8,3,4,3,99]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
	});
	test('input is not less than 8 - immediate mode', () => {
    const instructionSet = [3,3,1107,-1,8,3,4,3,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 10);
    expect(result).toStrictEqual([3,3,1107,0,8,3,4,3,99]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('jump test - is input zero', () => {
    const instructionSet = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 0);
    expect(result).toStrictEqual([3,12,6,12,15,1,13,14,13,4,13,99,0,0,1,9]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('jump test - is input non-zero', () => {
    const instructionSet = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9]; 
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,12,6,12,15,1,13,14,13,4,13,99,1,1,1,9]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
  });
  test('jump test - is input zero - immediate mode', () => {
    const instructionSet = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 0);
    expect(result).toStrictEqual([3,3,1105,0,9,1101,0,0,12,4,12,99,0]);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
	});
	test('jump test - is input non-zero - immediate mode', () => {
    const instructionSet = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1]; 
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,3,1105,1,9,1101,0,0,12,4,12,99,1]);
    expect(spy.mock.calls[0][0]).toBe(1);
    spy.mockRestore();
  });
  test('large test - 999 if input < 8', () => {
    const instructionSet = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 1);
    expect(result).toStrictEqual([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,1,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(spy.mock.calls[0][0]).toBe(999);
    spy.mockRestore();
  });
  test('large test - 1000 if input = 8', () => {
    const instructionSet = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 8);
    expect(result).toStrictEqual([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,1000,8,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(spy.mock.calls[0][0]).toBe(1000);
    spy.mockRestore();
  });
  test('large test - 1001 if input > 8', () => {
    const instructionSet = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
    const spy = jest.spyOn(console, 'log');
    const result = intcodeProgramTwo(instructionSet, 9);
    expect(result).toStrictEqual([3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,1001,9,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(spy.mock.calls[0][0]).toBe(1001);
    spy.mockRestore();
  });
});

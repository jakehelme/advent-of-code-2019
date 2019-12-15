const { hasAtLeastOneAdjacentMatch, digitsDontDecrease, passesTests } = require('./checks');

describe('hasAtLeastOneAdjacentMatch', () => {
  test.each`
    input       | hasMatch
		${'111111'} | ${true}
		${'223450'} | ${true}
		${'123789'} | ${false}
  `('$input has at least one adjacent match: $hasMatch', ({ input, hasMatch }) => {
		const result = hasAtLeastOneAdjacentMatch(input);
		expect(result).toBe(hasMatch);
	});
});

describe('digitsDontDecrease', () => {
  test.each`
    input       | dontDecrease
		${'111111'} | ${true}
		${'223450'} | ${false}
		${'123789'} | ${true}
  `('$input digits don\'t decrease: $dontDecrease', ({ input, dontDecrease }) => {
		const result = digitsDontDecrease(input);
		expect(result).toBe(dontDecrease);
	});
});

describe('passesTests', () => {
  test.each`
    input       | expectedResult
		${'111111'} | ${true}
		${'223450'} | ${false}
		${'123789'} | ${false}
  `('$input pass tests: $expectedResult', ({ input, expectedResult }) => {
		const result = passesTests(input);
		expect(result).toBe(expectedResult);
	});
});

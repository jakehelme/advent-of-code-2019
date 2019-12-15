function hasAtLeastOneAdjacentMatch(input) {
	for (let i = 0; i < input.length; i++) {
		const testCase = input.substr(i, 2);
		if(testCase[0] === testCase[1]) return true;
	}
	return false;
}

function digitsDontDecrease(input) {
	for (let i = 1; i < input.length; i++) {
		if(Number(input[i]) < Number(input[i-1])) return false;
	}
	return true;
}

function passesTests(input) {
	return hasAtLeastOneAdjacentMatch(input) && digitsDontDecrease(input);
}

module.exports = {
	hasAtLeastOneAdjacentMatch,
	digitsDontDecrease,
	passesTests
};
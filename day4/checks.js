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

function passesStricterTests(input) {
	return hasAtLeastOneAdjacentMatchNotPartOfLargerGroup(input) && digitsDontDecrease(input);
}

function hasAtLeastOneAdjacentMatchNotPartOfLargerGroup(input) {
	for (let i = 0; i < input.length; i++) {
		if(input[i] === input[i+1]){
			if(input[i+1] === input[i+2]){
				if(input[i+2] === input[i+3]){
					if(input[i+3] === input[i+4]) {
						return false;
					} else {
						i+=3;
					}
				} else {
					i+=2;
				}
			} else {
				return true;
			}
		}
	}
	return false;
}

module.exports = {
	hasAtLeastOneAdjacentMatch,
	digitsDontDecrease,
	passesTests,
	hasAtLeastOneAdjacentMatchNotPartOfLargerGroup,
	passesStricterTests
};
const input = require('./input');
const findMaxThrust = require('./findMaxThrust');

(function () {
	const maxThrust = findMaxThrust(input);
	console.log(`The max thrust available is ${maxThrust}`);
})();
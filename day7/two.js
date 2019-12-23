const input = require('./input');
const findMaxThrust = require('./findMaxThrust');

(function () {
	const maxThrust = findMaxThrust(input, [5,6,7,8,9], true);
	console.log(`The max thrust available is ${maxThrust}`);
})();
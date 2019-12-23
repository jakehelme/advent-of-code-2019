const input = require('./input');
const findMaxThrust = require('./findMaxThrust');

(function () {
	const maxThrust = findMaxThrust(input, [0,1,2,3,4], false);
	console.log(`The max thrust available is ${maxThrust}`);
})();
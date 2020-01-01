const IntcodeProgram = require('./IntcodeProgram');
const input = require('./input');

(function(){
	const prog = new IntcodeProgram(input);
	const result = prog.run([1]);
	console.log(result);
})();
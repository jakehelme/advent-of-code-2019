const { passesTests } = require('./checks');

const input = ['146810', '612564'];

(function () {
	const validPasswords = [];
	for (let i = Number(input[0]); i <= Number(input[1]); i++) {
		if(passesTests(i.toString())) validPasswords.push(i);
	}
	console.info(`There are ${validPasswords.length} valid passwords`);
})();
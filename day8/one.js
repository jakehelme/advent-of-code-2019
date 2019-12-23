const Picture = require('./Picture');
const pixels = require('./input');

const passwordPic = new Picture(25, 6, pixels);

console.log(`The checksum of the password picture is ${passwordPic.checkSum()}`);
function Picture(width, height, pixels) {

	this.pixels = pixels.split('').map(px => Number(px));
	this.width = width;
	this.height = height;

	this.layers = [];

	let currentLayer = [];
	this.pixels.forEach((px, i) => {
		currentLayer.push(px);
		if((i + 1) % (this.width * this.height) === 0 ) {
			this.layers.push([...currentLayer]);
			currentLayer = [];
		}
	});
}

Picture.prototype.countDigits = function(digitToCount, layerToCount) {
	return this.layers[layerToCount].reduce((accumulator, currentPixel) => {
		if(currentPixel === digitToCount) return accumulator + 1;
		else return accumulator;
	}, 0);
}

Picture.prototype.checkSum = function() {
	const layerZeroes = [];
	this.layers.forEach((layer, i) => {
		layerZeroes.push(this.countDigits(0, i));
	});

	let layerWithLeastZeroes;
	layerZeroes.forEach((layerZero, i, layerArray) => {
		if(i === 0) {
			layerWithLeastZeroes = 0;
			return;
		}
		if(layerZero < layerArray[layerWithLeastZeroes]) {
			layerWithLeastZeroes = i;
			return;
		}
	});
	
	const numberOfOnes = this.countDigits(1, layerWithLeastZeroes);
	const numberOfTwos = this.countDigits(2, layerWithLeastZeroes);
	return numberOfOnes * numberOfTwos;
}

module.exports = Picture;
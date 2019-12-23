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

Picture.prototype.render = function() {
	const renderedOutput = [];
	this.layers[0].forEach((_, i) => {
		renderedOutput.push(this.getPixelColour(i));
	});
	for (let i = 0; i < this.height; i++) {
		let row = '';
		for (let j = 0; j < this.width; j++) {
			row = `${row}${renderedOutput[(i * this.width) + j] === 1 ? '\x1b[47m \x1b[0m' : '\x1b[40m \x1b[0m'}`;
		}
		console.log(row);
	}
}

Picture.prototype.getPixelColour = function(pixelIndex) {
	let currentLayer = 0;
	while(currentLayer !== this.layers.length) {
		const currentPixel = this.layers[currentLayer][pixelIndex];
		if( currentPixel !== 2) {
			return currentPixel;
		} else {
			currentLayer++;
		}
	}
	return 2;
}

module.exports = Picture;
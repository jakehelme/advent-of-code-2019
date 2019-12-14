const Point = require('./Point');

function findInstersections(circuit1, circuit2) {
	const intersections = [];
	for (let c1i = 1; c1i < circuit1.length; c1i++) {
		const c1e = circuit1[c1i];
		for (let c2i = 1; c2i < circuit2.length; c2i++) {
			const c2e = circuit2[c2i];
			if(c1e.x === c2e.x && c1e.y === c2e.y) intersections.push(new Point(c1e.x, c1e.y));
		}
	}
	return intersections;
}

module.exports = findInstersections;
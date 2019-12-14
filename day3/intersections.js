const Point = require('./Point');
const manhattanDistance = require('./manhattanDistance');

function findIntersections(circuit1, circuit2) {
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

function stepsToPoint(circuit, point) {
	for (let i = 0; i < circuit.length; i++) {
		if(circuit[i].x === point.x && circuit[i].y === point.y) return i;
	}
}

function findDistanceToClosestIntersection(circuit1, circuit2) {
	const intersections = findIntersections(circuit1, circuit2);
	const distances = [];
	intersections.forEach(intersection => {
		distances.push(manhattanDistance(new Point(0, 0), intersection));
	});
	const answer = Math.min(...distances);
	return answer;
}

function findFewestCombinedSteps(circuit1, circuit2) {
	const intersections = findIntersections(circuit1, circuit2);
	const combinedSteps = [];
	intersections.forEach(intersection => {
		combinedSteps.push(stepsToPoint(circuit1, intersection) + stepsToPoint(circuit2, intersection));
	});
	return Math.min(...combinedSteps);
}

module.exports = { 
	findIntersections,
	stepsToPoint,
	findDistanceToClosestIntersection,
	findFewestCombinedSteps
};
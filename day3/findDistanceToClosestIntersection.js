const findIntersections = require('./findIntersections');
const manhattanDistance = require('./manhattanDistance');
const Point = require('./Point');

function findDistanceToClosestIntersection(circuit1, circuit2) {
	const intersections = findIntersections(circuit1, circuit2);
	const distances = [];
	intersections.forEach(intersection => {
		distances.push(manhattanDistance(new Point(0, 0), intersection));
	});
	const answer = Math.min(...distances);
	return answer;
}

module.exports = findDistanceToClosestIntersection;
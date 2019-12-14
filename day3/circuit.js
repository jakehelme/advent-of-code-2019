const Point = require('./Point');

function createCircuit(path) {
	const pathPoints = [new Point(0,0)];
  path.forEach(pathInstruction => {
		pathPoints.push(...createStraightSection(pathPoints[pathPoints.length - 1], pathInstruction));
	});
	return pathPoints;
}

function createStraightSection(startPoint, instruction) {
	const direction = instruction.substr(0, 1);
	const length = Number(instruction.substr(1));

	const straightPath = [];

	for (let index = 0; index < length; index++) {
		const prevPoint = straightPath.length ? straightPath[straightPath.length - 1] : startPoint;
		switch (direction) {
      case "R":
				straightPath.push(new Point(prevPoint.x + 1, prevPoint.y));
				break;
      case "L":
				straightPath.push(new Point(prevPoint.x - 1, prevPoint.y));
				break;
      case "U":
				straightPath.push(new Point(prevPoint.x, prevPoint.y + 1));
				break;
      case "D":
				straightPath.push(new Point(prevPoint.x, prevPoint.y - 1));
				break;
    }
	}
	return straightPath;
}

module.exports = {
	createCircuit,
	createStraightSection
}
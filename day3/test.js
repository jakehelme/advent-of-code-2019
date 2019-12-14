const Point = require('./Point');
const manhattanDistance = require('./manhattanDistance');
const { createCircuit, createStraightSection } = require('./circuit');
const findIntersections = require('./findIntersections');
const findDistanceToClosestIntersection = require('./findDistanceToClosestIntersection');

describe('Point', () => {
  test('can construct', () => {
    const point = new Point(1, 2);
    expect(point).toEqual({ x: 1, y: 2 });
  });
});

describe('manhattanDistance', () => {
  test.each`
    pointA              | pointB              | expectedResult
    ${new Point(0, 0)}  | ${new Point(1, 1)}  | ${2}
    ${new Point(0, 0)}  | ${new Point(2, 2)}  | ${4}
    ${new Point(0, 0)}  | ${new Point(6, 6)}  | ${12}
    ${new Point(4, 5)}  | ${new Point(1, 3)}  | ${5}
    ${new Point(-4, 5)} | ${new Point(1, -3)} | ${13}
  `(
    'distance between $pointA and $pointB is $expectedResult',
    ({ pointA, pointB, expectedResult }) => {
      const result = manhattanDistance(pointA, pointB);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('createStraightSection', () => {
  test('creates array of points in straight right line', () => {
    const result = createStraightSection(new Point(0, 0), 'R3');
    expect(result).toStrictEqual([
      new Point(1, 0),
      new Point(2, 0),
      new Point(3, 0)
    ]);
  });

  test('creates array of points in straight left line', () => {
    const result = createStraightSection(new Point(0, 0), 'L1');
    expect(result).toStrictEqual([new Point(-1, 0)]);
  });

  test('creates array of points in straight up line', () => {
    const result = createStraightSection(new Point(0, 0), 'U1');
    expect(result).toStrictEqual([new Point(0, 1)]);
  });

  test('creates array of points in straight down line', () => {
    const result = createStraightSection(new Point(0, 0), 'D1');
    expect(result).toStrictEqual([new Point(0, -1)]);
  });

  test('creates array of points in straight line from correct point', () => {
    const result = createStraightSection(new Point(4, 3), 'D4');
    expect(result).toStrictEqual([
      new Point(4, 2),
      new Point(4, 1),
      new Point(4, 0),
      new Point(4, -1)
    ]);
  });
});

describe('createCircuit', () => {
  test('creates 1 instruction circuit correctly', () => {
    const result = createCircuit(['R2']);
    expect(result).toStrictEqual([
      new Point(0, 0),
      new Point(1, 0),
      new Point(2, 0)
    ]);
  });
  test('creates 2 instruction circuit correctly', () => {
    const result = createCircuit(['R2', 'U1']);
    expect(result).toStrictEqual([
      new Point(0, 0),
      new Point(1, 0),
      new Point(2, 0),
      new Point(2, 1)
    ]);
  });
});

describe('findIntersections', () => {
	test('should find 1 intersection', () => {
    const c1 = createCircuit(['R3', 'U2', 'L3']);
		const c2 = createCircuit(['L3', 'U2', 'R3']);
		const result = findIntersections(c1, c2);
		expect(result.length).toBe(1);
		expect(result).toContainEqual(new Point(0,2));
  });
  test('should find 2 intersection', () => {
    const c1 = createCircuit(['R8', 'U5', 'L5', 'D3']);
		const c2 = createCircuit(['U7', 'R6', 'D4', 'L4']);
		const result = findIntersections(c1, c2);
		expect(result.length).toBe(2);
		expect(result).toContainEqual(new Point(3,3));
		expect(result).toContainEqual(new Point(6,5));
	});
});

describe('findDistanceToClosestIntersection', () => {
	test('', () => {
		const c1 = createCircuit(['R8', 'U5', 'L5', 'D3']);
		const c2 = createCircuit(['U7', 'R6', 'D4', 'L4']);
		const result = findDistanceToClosestIntersection(c1,c2);
		expect(result).toBe(6);
	});
	test('', () => {
		const c1 = createCircuit('R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(','));
		const c2 = createCircuit('U62,R66,U55,R34,D71,R55,D58,R83'.split(','));
		const result = findDistanceToClosestIntersection(c1,c2);
		expect(result).toBe(159);
	});
	test('', () => {
		const c1 = createCircuit('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'.split(','));
		const c2 = createCircuit('U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'.split(','));
		const result = findDistanceToClosestIntersection(c1,c2);
		expect(result).toBe(135);
	});
});
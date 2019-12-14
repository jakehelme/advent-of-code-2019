const Point = require('./Point');
const manhattanDistance = require('./manhattanDistance');
const { createCircuit, createStraightSection } = require('./circuit');

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
    const result = createCircuit(['R2','U1']);
    expect(result).toStrictEqual([
      new Point(0, 0),
      new Point(1, 0),
			new Point(2, 0),
			new Point(2, 1)
    ]);
  });
});

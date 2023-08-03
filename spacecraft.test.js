const spacecraft = require('./spacecraft');

let result;
const startingPosition = { x: 0, y: 0, z: 0 };
const initialDirection = 'N';

beforeEach(() => {
  // Setting up the initial state before each test.
  result = spacecraft(
    [],
    startingPosition.x,
    startingPosition.y,
    startingPosition.z,
    initialDirection
  );
});

test('should handle missing values correctly', () => {
  const commands = [];

  result = spacecraft([commands], null, result.y, result.z, result.direction);
  expect(result).toEqual('There is error in input');
});

test('should handle empty commands correctly', () => {
  result = spacecraft([], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'N' });
});

test('should handle forward command correctly', () => {
  const commands = ['f'];
  result.direction = 'S';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: -1, z: 0, direction: 'S' });
});

test('handles backward command correctly', () => {
  const commands = ['b'];
  result.direction = 'N';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: -1, z: 0, direction: 'N' });
});

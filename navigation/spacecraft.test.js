const initialstate = require('./initialstate');
const rotate = require('./rotate');
const spacecraft = require('./spacecraft');

let result;
const startingPosition = { x: 0, y: 0, z: 0 };
const initialDirection = 'N';

beforeEach(() => {
  // Setting up the initial state before each test.
  result = initialstate(
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

test('should handle forward command correctly with direction N', () => {
  const commands = ['f'];
  result.direction = 'N';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
});

test('should handle forward command correctly with direction S', () => {
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

test('should handle forward command correctly with direction E', () => {
  const commands = ['f'];
  result.direction = 'E';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 1, y: 0, z: 0, direction: 'E' });
});

test('should handle forward command correctly with direction W', () => {
  const commands = ['f'];
  result.direction = 'W';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: -1, y: 0, z: 0, direction: 'W' });
});

test('should handle forward command correctly with direction U', () => {
  const commands = ['f'];
  result.direction = 'U';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 0, z: 1, direction: 'U' });
});

test('should handle forward command correctly with direction D', () => {
  const commands = ['f'];
  result.direction = 'D';

  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 0, z: -1, direction: 'D' });
});

test('handles backward command correctly with direction N', () => {
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

test('handles backward command correctly with direction S', () => {
  const commands = ['b'];
  result.direction = 'S';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 1, z: 0, direction: 'S' });
});

test('handles backward command correctly with direction E', () => {
  const commands = ['b'];
  result.direction = 'E';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: -1, y: 0, z: 0, direction: 'E' });
});

test('handles backward command correctly with direction W', () => {
  const commands = ['b'];
  result.direction = 'W';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 1, y: 0, z: 0, direction: 'W' });
});

test('handles backward command correctly with direction U', () => {
  const commands = ['b'];
  result.direction = 'U';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 0, z: -1, direction: 'U' });
});

test('handles backward command correctly with direction D', () => {
  const commands = ['b'];
  result.direction = 'D';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 0, z: 1, direction: 'D' });
});

test('handles the returned object correctly', () => {
  const commands = ['r'];
  result.direction = 'N';
  result = rotate([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'E' });
});

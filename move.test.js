const spacecraft = require('./spacecraft');
const move = require('./move');

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

test('handles up command correctly', () => {
  const commands = ['u'];
  result.direction = 'E';
  result = move([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'U' });
});

test('handles down command correctly', () => {
  const commands = ['d'];
  result.direction = 'E';
  result = move([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'D' });
});

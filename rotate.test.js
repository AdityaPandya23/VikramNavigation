const spacecraft = require('./spacecraft');
const rotate = require('./rotate');
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
test('handles left command correctly', () => {
  const commands = ['l'];
  result.direction = 'S';
  result = rotate([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'E' });
});

test('handles right command correctly', () => {
  const commands = ['r'];
  result.direction = 'E';
  result.x = 3;
  result = rotate([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 3, y: 0, z: 0, direction: 'S' });
});

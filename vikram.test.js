const initialstate = require('./initialstate');
const vikram = require('./vikram');

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

test('handles more than one command', () => {
  const commands = ['f', 'r', 'u', 'b', 'l'];
  result.direction = 'N';
  result = vikram(commands, result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 1, z: -1, direction: 'W' });
});

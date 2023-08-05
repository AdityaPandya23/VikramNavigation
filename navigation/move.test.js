const spacecraft = require('./spacecraft');
const initialstate = require('./initialstate');
const move = require('./move');

let result;
const startingPosition = { x: 0, y: 0, z: 0 };
const initialDirection = 'N';
const previousState = { dir: null };
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

test('handles up command with N,S,E,W directions correctly', () => {
  const commands = ['u'];
  result.direction = 'E';
  result = spacecraft(
    [commands],
    result.x,
    result.y,
    result.z,
    result.direction
  );
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'U' });
});

test('handles up command with U,D direction correctly', () => {
  const commands = ['d'];
  result.direction = 'E';
  result = move([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'E' });
});

test('handles down command with N,S,E,W direction correctly', () => {
  const commands = ['d'];
  result.direction = 'S';
  result = move([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'D' });
});

test('handles down command with U,D direction correctly', () => {
  const commands = ['d'];
  result.direction = 'W';
  result = move([commands], result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'N' });
});

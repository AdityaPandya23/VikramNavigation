const initialstate = require('./navigation/initialstate');
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

test('handles moving forward', () => {
  const commands = ['f', 'f', 'f']; // Move forward 3 steps
  const result = vikram(commands, 0, 0, 0, 'N');
  expect(result).toEqual({ x: 0, y: 3, z: 0, direction: 'N' });
});

test('handles moving backward', () => {
  const commands = ['b', 'b']; // Move backward 2 steps
  const result = vikram(commands, 0, 0, 0, 'N');
  expect(result).toEqual({ x: 0, y: -2, z: 0, direction: 'N' });
});

test('handles rotating left', () => {
  const commands = ['l', 'l']; // Rotate left twice (180 degrees)
  const result = vikram(commands, 0, 0, 0, 'N');
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'S' });
});

test('handles rotating right', () => {
  const commands = ['r', 'r', 'r']; // Rotate right thrice (270 degrees)
  const result = vikram(commands, 0, 0, 0, 'N');
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'W' });
});

test('handles more than one command', () => {
  const commands = ['f', 'r', 'u', 'b', 'l'];
  result.direction = 'N';
  result = vikram(commands, result.x, result.y, result.z, result.direction);
  expect(result).toEqual({ x: 0, y: 1, z: -1, direction: 'W' });
});

const spacecraft = require('./spacecraft');

const commands = [];
const startingPosition = {};
const initialDirection = '';
const result = spacecraft(
  commands,
  startingPosition.x,
  startingPosition.y,
  startingPosition.z,
  initialDirection
);

test('passing empty input should should give nothing', () => {
  expect(result).toEqual();
});

test('should give response for final position and direction', () => {
  expect(result).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
});

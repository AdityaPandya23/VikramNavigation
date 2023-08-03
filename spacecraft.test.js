const spacecraft = require('./spacecraft');

const commands = ['f', 'r', 'u', 'b'];
const startingPosition = { x: 0, y: 0, z: 0 };
const initialDirection = 'N';
const result = spacecraft(
  commands,
  startingPosition.x,
  startingPosition.y,
  startingPosition.z,
  initialDirection
);

test('should give response for final position and direction', () => {
  expect(result).toEqual({ x: 0, y: 1, z: 0, direction: 'S' });
});

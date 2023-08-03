const spacecraft = require('./spacecraft');

test('should handle empty commands correctly', () => {
  const commands = [];
  const startingPosition = { x: 0, y: 0, z: 0 };
  const initialDirection = 'N';

  const result = spacecraft(
    commands,
    startingPosition.x,
    startingPosition.y,
    startingPosition.z,
    initialDirection
  );
  expect(result).toEqual({ x: 0, y: 0, z: 0, direction: 'N' });
});

test('should handle forward command correctly', () => {
  const commands = ['f'];
  const startingPosition = { x: 0, y: 0, z: 0 };
  const initialDirection = 'N';

  const result = spacecraft(
    commands,
    startingPosition.x,
    startingPosition.y,
    startingPosition.z,
    initialDirection
  );
  expect(result).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
});

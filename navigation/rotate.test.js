const rotate = require('./rotate');
const initialstate = require('./initialstate');

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

describe('rotate', () => {
  test('should rotate the direction to the left', () => {
    result.direction = 'N';
    let ans = rotate('l', result.x, result.y, result.z, result.direction);
    expect(ans.direction).toEqual('W');
    result = ans;
  });

  test('should rotate the direction to the right', () => {
    result.direction = 'N';
    let ans = rotate('r', result.x, result.y, result.z, result.direction);
    expect(ans.direction).toEqual('E');
    result = ans;
  });

  test('should not change the direction if the command is invalid', () => {
    result.direction = 'N';
    let ans = rotate('b', result.x, result.y, result.z, result.direction);
    expect(ans.direction).toEqual('N');
    result = ans;
  });
});

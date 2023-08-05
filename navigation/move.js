let flag = 0;
let previousdir = '';
let previousmove = '';
function move(commands, x, y, z, direction) {
  const position = { x, y, z, direction };

  if (flag) {
    let previousState = previousdir;
    previousdir = '';
    flag = 0;
    if (
      (commands == 'u' && previousmove == 'U') ||
      (commands == 'd' && previousmove == 'D')
    ) {
      previousmove = '';
      if (previousState == 'N') return { ...position, direction: 'S' };
      else if (previousState == 'S') return { ...position, direction: 'N' };
      else if (previousState == 'E') return { ...position, direction: 'W' };
      else if (previousState == 'W') return { ...position, direction: 'E' };
    } else {
      direction = previousState;
      return { ...position, direction };
    }
  } else {
    previousdir = direction;
    flag = 1;
    if (commands == 'u') {
      previousmove = 'U';
      return { ...position, direction: 'U' };
    } else {
      previousmove = 'D';
      return { ...position, direction: 'D' };
    }
  }
}
module.exports = move;

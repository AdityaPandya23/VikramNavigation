function move(commands, x, y, z, direction, previousState) {
  const position = { x, y, z, direction };

  if (commands == 'u') {
    if (previousState.dir) {
      if (previousState.dir == 'N') return { ...position, direction: 'S' };
      else if (previousState.dir == 'S') return { ...position, direction: 'N' };
      else if (previousState.dir == 'E') return { ...position, direction: 'W' };
      else if (previousState.dir == 'W') return { ...position, direction: 'E' };

      previousState.dir = null;
    } else {
      previousState.dir = direction;
      return { ...position, direction: 'U' };
    }
  } else if (commands == 'd') {
    if (previousState.dir) {
      if (previousState.dir == 'N') return { ...position, direction: 'S' };
      else if (previousState.dir == 'S') return { ...position, direction: 'N' };
      else if (previousState.dir == 'E') return { ...position, direction: 'W' };
      else if (previousState.dir == 'W') return { ...position, direction: 'E' };

      previousState.dir = null;
    } else {
      previousState.dir = direction;
      return { ...position, direction: 'D' };
    }
  }
}
module.exports = move;

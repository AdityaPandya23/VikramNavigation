function spacecraft(commands, x, y, z, direction) {
  const FORWARD = 'f';
  const BACK = 'b';
  const LEFT = 'l';
  const RIGHT = 'r';
  const position = { x, y, z, direction };

  if (
    position.x == null ||
    position.y == null ||
    position.z == null ||
    position.direction == null
  )
    return 'There is error in input';
  else if (commands.length == 0) return position;
  else if (commands == 'f') {
    // consider E,N,U value as 1 and W, S, D value as -1
    if (direction == 'N') return { ...position, y: y + 1 };
    else if (direction == 'S') return { ...position, y: y - 1 };
    else if (direction == 'E') return { ...position, x: x + 1 };
    else if (direction == 'W') return { ...position, x: x - 1 };
    else if (direction == 'U') return { ...position, z: z + 1 };
    else if (direction == 'D') return { ...position, z: z - 1 };
  } else if (commands == 'b') {
    // consider E,N,U value as 1 and W, S, D value as -1
    if (direction == 'N') return { ...position, y: y - 1 };
    else if (direction == 'S') return { ...position, y: y + 1 };
    else if (direction == 'E') return { ...position, x: x - 1 };
    else if (direction == 'W') return { ...position, x: x + 1 };
    else if (direction == 'U') return { ...position, z: z - 1 };
    else if (direction == 'D') return { ...position, z: z + 1 };
  }

  return position;
}
module.exports = spacecraft;

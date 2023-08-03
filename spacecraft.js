function spacecraft(commands, x, y, z, direction) {
  if (x == null || y == null || z == null || direction == null)
    return 'There is error in input';
  else if (commands.length == 0) return { x, y, z, direction };
  else if (commands == 'f') {
    // consider E,N,U value as 1 and W, S, D value as -1
    if (direction == 'N') return { x, y: y + 1, z, direction };
    else if (direction == 'S') return { x, y: y - 1, z, direction };
    else if (direction == 'E') return { x: x + 1, y, z, direction };
    else if (direction == 'W') return { x: x - 1, y, z, direction };
    else if (direction == 'U') return { x, y, z: z + 1, direction };
    else if (direction == 'D') return { x, y, z: z - 1, direction };
  } else if (commands == 'b') {
    // consider E,N,U value as 1 and W, S, D value as -1
    if (direction == 'N') return { x, y: y - 1, z, direction };
    else if (direction == 'S') return { x, y: y + 1, z, direction };
    else if (direction == 'E') return { x: x - 1, y, z, direction };
    else if (direction == 'W') return { x: x + 1, y, z, direction };
    else if (direction == 'U') return { x, y, z: z - 1, direction };
    else if (direction == 'D') return { x, y, z: z + 1, direction };
  }
}
module.exports = spacecraft;

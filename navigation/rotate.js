function rotate(commands, x, y, z, direction) {
  const position = { x, y, z, direction };
  if (commands == 'l') {
    if (direction == 'N' || direction == 'U')
      return { ...position, direction: 'W' };
    else if (direction == 'W') return { ...position, direction: 'S' };
    else if (direction == 'S' || direction == 'D')
      return { ...position, direction: 'E' };
    else return { ...position, direction: 'N' };
  } else if (commands == 'r') {
    if (direction == 'N' || direction == 'U')
      return { ...position, direction: 'E' };
    else if (direction == 'E') return { ...position, direction: 'S' };
    else if (direction == 'S' || direction == 'D')
      return { ...position, direction: 'W' };
    else return { ...position, direction: 'N' };
  }

  return position;
}
module.exports = rotate;

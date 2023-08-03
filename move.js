function move(commands, x, y, z, direction) {
  const position = { x, y, z, direction };

  if (commands == 'u') {
    return { ...position, direction: 'U' };
  } else if (commands == 'd') {
    return { ...position, direction: 'D' };
  }

  return position;
}
module.exports = move;

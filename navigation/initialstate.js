function initialstate(commands, x, y, z, direction) {
  const position = { commands, x, y, z, direction };

  return position;
}
module.exports = initialstate;

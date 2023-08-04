const spacecraft = require('./navigation/spacecraft');

function vikram(commands, x, y, z, direction) {
  const initialCoordinates = { x: 0, y: 0, z: 0, direction: 'N' };
  let currentCoordinates = { ...initialCoordinates };

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    currentCoordinates = spacecraft(
      command,
      currentCoordinates.x,
      currentCoordinates.y,
      currentCoordinates.z,
      currentCoordinates.direction
    );
  }

  return currentCoordinates;
}

module.exports = vikram;

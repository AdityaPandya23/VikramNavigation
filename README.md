# Spacecraft Command Interpreter

This is a JavaScript implementation of a spacecraft command interpreter. Given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down), the program processes a character array of commands to move and rotate the spacecraft. The spacecraft's movement and rotations are rigid, and it cannot move beyond the galactic boundaries.

## Functionalities

The program supports the following functionalities:

1. Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
2. Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
3. Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

## Usage

1. Clone the repository or download the file..
2. Include the vikram_navigation file in your project.
3. Call the vikram function with the appropriate parameters as per given example there.

## Note
1. The spacecraft's initial direction represents the reference frame for movement and rotation.
2. The spacecraft cannot move or rotate diagonally; it can only move in the direction it is currently facing.
3. Assume that the spacecraft's movement and rotations are rigid, and it cannot move beyond the galactic boundaries.
4. Feel free to use this code to simulate spacecraft movements and rotations for your space exploration projects. Happy exploring! 🚀

## Authors

- Aditya Pandya - [GitHub](https://github.com/AdityaPandya23)

## Acknowledgments

This project was built as a learning exercise using the MERN stack. Thank you to the creators of React, React-Bootstrap, and the other technologies used in this project.

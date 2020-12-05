const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const boardingPasses = input.split('\n');
  const seatIds = boardingPasses.map(boardingPass => parseInt(boardingPass.replace(/F|L/g, 0).replace(/B|R/g, 1), 2));
  return Math.max(...seatIds);
};

console.log(solvePartOne(input));

module.exports = solvePartOne;

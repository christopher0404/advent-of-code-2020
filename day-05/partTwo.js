const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const seatIds = input.split('\n').map(line => {
    return parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2);
  });

  for (const seatId of seatIds) {
    if (!seatIds.includes(seatId - 1) && seatIds.includes(seatId - 2)) {
      return seatId - 1;
    }
  }
};

console.log(solvePartTwo(input));

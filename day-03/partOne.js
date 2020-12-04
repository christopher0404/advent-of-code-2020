const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const area = input.split('\n').filter(line => line);
  let counter = 0;
  let x = 0;
  let y = 0;

  while (y < area.length) {
    if (area[y][x % area[0].length] === '#') {
      counter++;
    }

    x += 3;
    y += 1;
  }

  return counter;
}

console.log(solvePartOne(input));

module.exports = solvePartOne;

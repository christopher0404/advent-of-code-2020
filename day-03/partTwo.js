const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const slopes = [
    [1, 1], [3, 1], [5, 1], [7, 1], [1, 2]
  ];
  let result = 1;

  function countTrees(stepsX, stepsY) {
    const area = input.split('\n').filter(line => line);
    let counter = 0;
    let x = 0;
    let y = 0;

    while (y < area.length) {
      if (area[y][x % area[0].length] === '#') {
        counter++;
      }

      x += stepsX;
      y += stepsY;
    }

    return counter;
  }

  for (const slope of slopes) {
    result *= countTrees(slope[0], slope[1]);
  }

  return result;
}

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const numbers = input.split('\n').map(line => Number(line));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 2020) {
          return numbers[i] * numbers[j] * numbers[k];
        }
      }
    }
  }
};

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

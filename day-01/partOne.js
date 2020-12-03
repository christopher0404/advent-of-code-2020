const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const numbers = input.split('\n').map(line => Number(line));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        return numbers[i] * numbers[j];
      }
    }
  }
};

console.log(solvePartOne(input));

module.exports = solvePartOne;

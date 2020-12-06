const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const groups = input.split(/\n{2,}/g).map(line => line.replace(/\n/g, ''));
  const counts = groups.map(group => new Set(group).size);
  return counts.reduce((acc, cur) => acc + cur);
}

console.log(solvePartOne(input));

module.exports = solvePartOne;

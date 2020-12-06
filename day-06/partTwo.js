const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const groups = input.split(/\n{2,}/g).map(line => line.replace(/\n/g, ''));
  const sizeOfGroups = input.split(/\n{2,}/g).map(line => line.split('\n')).map(question => question.length);
  const counts = groups.map((group, index) =>
    [...new Set(group)].filter(letter =>
      group.match(new RegExp(letter, 'gi')).length === sizeOfGroups[index]
    ).length
  );
  return counts.reduce((acc, cur) => acc + cur);
}

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

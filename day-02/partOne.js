const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  return input.split('\n').filter(line => {
    const min = Number(line.split(' ')[0].split('-')[0]);
    const max = Number(line.split(' ')[0].split('-')[1]);
    const targetLetter = line.split(' ')[1].split(':')[0];
    const password = line.split(' ')[2];
    const count = password.split('').filter(letter => letter === targetLetter).length;
    return count >= min && count <= max;
  }).length;
}

console.log(solvePartOne(input));

module.exports = solvePartOne;

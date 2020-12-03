const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  return input.split('\n').filter(line => {
    let [positions, letter, password] = line.split(' ');
    const [firstPosition, secondPosition] = positions.split('-').map(Number);
    letter = letter.replace(':', '');
    return password[firstPosition - 1] === letter ^ password[secondPosition - 1] === letter;
  }).length;
}

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

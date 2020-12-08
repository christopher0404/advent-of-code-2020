const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const instructions = input.split('\n').map(line => {
    const [operation, argument] = line.split(' ');
    return [operation, Number(argument)];
  });

  const executedInstructions = {};
  let accumulator = 0;
  let currentInstruction = 0;

  while (!executedInstructions[currentInstruction]) {
    executedInstructions[currentInstruction] = true;
    const [operation, argument] = instructions[currentInstruction];

    switch (operation) {
      case 'acc':
        accumulator += argument;
        currentInstruction++;
        break;
      case 'jmp':
        currentInstruction += argument;
        break;
      case 'nop':
        currentInstruction++;
        break;
    }
  }

  return accumulator;
}

console.log(solvePartOne(input));

module.exports = solvePartOne;

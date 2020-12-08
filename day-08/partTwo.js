const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const instructions = input.split('\n').map(line => {
    const [operation, argument] = line.split(' ');
    return [operation, Number(argument)];
  });

  for (let i = 0; i < instructions.length; i++) {
    const patched = instructions.map(([operation, value]) => [operation, value]);

    if (instructions[i][0] === 'jmp') {
      patched[i][0] = 'nop';
    } else if (instructions[i][0] === 'nop') {
      patched[i][0] = 'jmp';
    } else {
      continue;
    }

    const executedInstructions = new Set();
    let accumulator = 0;
    let currentInstruction = 0;

    while (!executedInstructions.has(currentInstruction)) {
      executedInstructions.add(currentInstruction);
      const [operation, argument] = patched[currentInstruction];

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

      if (currentInstruction >= patched.length) {
        return accumulator;
      }
    }
  }
}

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

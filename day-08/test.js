const solvePartOne = require('./partOne');
const solvePartTwo = require('./partTwo');

const program = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

test('should return 5 as the value in the accumulator', () => {
  expect(solvePartOne(program)).toBe(5);
});

test('should return 8 as the value of the accumulator after the program terminates', () => {
  expect(solvePartTwo(program)).toBe(8);
});

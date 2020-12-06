const solvePartOne = require('./partOne');
const solvePartTwo = require('./partTwo');

const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

test('should return 11 as the sum of those counts', () => {
  expect(solvePartOne(input)).toBe(11);
});

test('should return 6 as the sum of those counts', () => {
  expect(solvePartTwo(input)).toBe(6);
});

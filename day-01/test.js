const solvePartOne = require('./partOne');
const solvePartTwo = require('./partTwo');

const input = `1721
979
366
299
675
1456`;

test('should return 514579 with input', () => {
  expect(solvePartOne(input)).toBe(514579);
});

test('should return 241861950 with input', () => {
  expect(solvePartTwo(input)).toBe(241861950);
});

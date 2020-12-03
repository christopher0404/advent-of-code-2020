const solvePartOne = require('./partOne');
const solvePartTwo = require('./partTwo');

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

test('should return 2 valid passwords', () => {
  expect(solvePartOne(input)).toBe(2);
});

test('should return 1 valid password', () => {
  expect(solvePartTwo(input)).toBe(1);
});

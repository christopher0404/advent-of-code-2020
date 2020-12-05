const solvePartOne = require('./partOne');

const input = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

test('the highest seat ID is 820', () => {
  expect(solvePartOne(input)).toBe(820);
});

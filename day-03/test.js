const solvePartOne = require('./partOne');
const solvePartTwo = require('./partTwo');

const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

test('should return 7 trees that will be encountered', () => {
  expect(solvePartOne(input)).toBe(7);
});

test('multiply the number of trees that will be encountered should return 336', () => {
  expect(solvePartTwo(input)).toBe(336);
});

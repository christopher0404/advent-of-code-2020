const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartOne(input) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const fields = input.split(/\n{2,}/g).map(line => line.split('\n').join(' ').split(' '));
  const splittedFields = fields.map(field => field.map(string => string.split(':')));
  const passports = splittedFields.map(field => Object.fromEntries(field));
  const validPassports = passports.filter(passport => requiredFields.every(field => Object.keys(passport).includes(field)));
  return validPassports.length;
};

console.log(solvePartOne(input));

module.exports = solvePartOne;

// another simpler way
/*
function solvePartOne(input) {
  const passports = input.split('\n\n');
  let count = 0;

  passports.map(line => {
    if (
      line.includes('byr') &&
      line.includes('iyr') &&
      line.includes('eyr') &&
      line.includes('hgt') &&
      line.includes('hcl') &&
      line.includes('ecl') &&
      line.includes('pid')
    ) {
      count++;
    }
  });

  return count;
}
 */

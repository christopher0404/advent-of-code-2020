const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

function solvePartTwo(input) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const fields = input.split(/\n{2,}/g).map(line => line.split('\n').join(' ').split(' '));
  const splittedFields = fields.map(field => field.map(string => string.split(':')));
  const passports = splittedFields.map(field => Object.fromEntries(field));
  const passportsWithRequiredFields = passports.filter(passport => requiredFields.every(field => Object.keys(passport).includes(field)));

  const isBirthYear = (byr) => byr.length === 4 && byr >= 1920 && byr <= 2002;
  const isIssueYear = (iyr) => iyr.length === 4 && iyr >= 2010 && iyr <= 2020;
  const isExpirationYear = (eyr) => eyr.length === 4 && eyr >= 2020 && eyr <= 2030;
  const isHeight = (hgt) => {
    if (hgt.includes('cm')) {
      return Number(hgt.replace('cm', '')) >= 150 && Number(hgt.replace('cm', '')) <= 193;
    } else if (hgt.includes('in')) {
      return Number(hgt.replace('in', '')) >= 59 && Number(hgt.replace('in', '')) <= 76;
    } else return false
  }
  const isHairColor = (hcl) => /#[a-f0-9]{6}/.test(hcl);
  const isEyeColor = (ecl) => /(amb|blu|brn|gry|grn|hzl|oth)/.test(ecl);
  const isPassportId = (pid) => /^\d{9}$/.test(pid);

  const validPassports = passportsWithRequiredFields.filter(passport => {
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
    return (
      isBirthYear(byr) &&
      isIssueYear(iyr) &&
      isExpirationYear(eyr) &&
      isHeight(hgt) &&
      isHairColor(hcl) &&
      isEyeColor(ecl) &&
      isPassportId(pid)
    )
  });

  return validPassports.length;
};

console.log(solvePartTwo(input));

module.exports = solvePartTwo;

module.exports = function validate(studentNumber) {
  const givenDigit = studentNumber.split('').reverse().slice(0, 1).join('').toUpperCase();
  const chars = studentNumber.split('').reverse().splice(1);

  let counter = 2;
  let sum = 0;
  for (let char of chars) {
    sum += Number(char) * counter++;
    counter = counter > 8 ? 2 : counter;
  }

  const verificationDigit = (11 - sum % 11 != 10) ? String(11 - sum % 11) : 'J';
  return verificationDigit === givenDigit;
}

'use strict';

/**
 * Validate student number identifier.
 * @param  {string} studentNumber Student ID.
 * @return {boolean}               Return true if the input is valid, false otherwise.
 */
module.exports = function validate(studentNumber) {
  if (studentNumber === undefined) {
    return false;
  }

  studentNumber = String(studentNumber)
  const givenDigit = studentNumber.split('').reverse().slice(0, 1).join('').toUpperCase(),
    chars = studentNumber.split('').reverse().splice(1);

  let counter = 2,
    sum = 0;
  for (let char of chars) {
    sum += Number(char) * counter++;
    counter = counter > 8 ? 2 : counter;
  }

  const verificationDigit = (11 - sum % 11 != 10) ? String(11 - sum % 11) : 'J';
  return verificationDigit === givenDigit;
}

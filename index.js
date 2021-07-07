/**
 * Validate student number identifier.
 * @param  {(string|number)} student Number Student ID.
 * @return {boolean}                 Return true if the input is valid, false otherwise.
 */
function validate(studentNumber) {
  if (studentNumber === undefined) {
    return false;
  }

  studentNumber = String(studentNumber);
  var givenDigit = studentNumber.split('').reverse().slice(0, 1).join('').toUpperCase();
  var chars = studentNumber.split('').reverse().splice(1);

  var counter = 2;
  var sum = 0;
  for (var i = 0; i < chars.length; i++) {
    sum += Number(chars[i]) * counter++;
    counter = counter > 8 ? 2 : counter;
  }

  var verificationDigit = (11 - sum % 11 !== 10) ? String(11 - sum % 11) : 'J';
  var verificationDigit = verificationDigit === '11' ? '0' : verificationDigit;
  return verificationDigit === givenDigit;
}

module.exports = validate

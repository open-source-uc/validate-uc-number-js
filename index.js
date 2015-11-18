module.exports = function validate(numeroAlmno) {
  if (numeroAlmno.length == 8) {
    return true;
  } else {
    return false;
  }
}

var validUCnumber =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports) {

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
	  var givenDigit = studentNumber.split('').reverse().slice(0, 1).join('').toUpperCase(),
	    chars = studentNumber.split('').reverse().splice(1);
	
	  var counter = 2,
	    sum = 0;
	  for (var i = 0; i < chars.length; i++) {
	    sum += Number(chars[i]) * counter++;
	    counter = counter > 8 ? 2 : counter;
	  }
	
	  var verificationDigit = (11 - sum % 11 != 10) ? String(11 - sum % 11) : 'J';
	  return verificationDigit === givenDigit;
	}
	
	module.exports = validate


/***/ }
/******/ ]);
//# sourceMappingURL=uc-numero-alumno.js.map
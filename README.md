# UC number validator

[![Build Status][ci-image]][ci-url] [![lint][lint-image]][lint-url]

Universal Javascript module to validate UC alumni identifier numbers.

Compatible with Node.js, React-Native and browser environments.

## Getting started

Install this module with:

```sh
# with yarn:
yarn add @open-source-uc/validate-uc-number

# with npm:
npm install --save @open-source-uc/validate-uc-number
```

Node.js and browser (with webpack) usage:

```js
'use strict';

const validate = require('@open-source-uc/validate-uc-number');

// With strings
if (validate('1263476J')) {
  // ...
}

// With numbers
if (validate(13546212)) {
  // ...
}
```

[ci-image]: https://travis-ci.org/open-source-uc/validate-uc-number-js.svg
[ci-url]: https://travis-ci.org/open-source-uc/validate-uc-number-js
[lint-image]: https://codeclimate.com/github/open-source-uc/validate-uc-number-js/badges/gpa.svg
[lint-url]: https://codeclimate.com/github/open-source-uc/validate-uc-number-js

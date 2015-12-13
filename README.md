# Validador de número de alumno UC

[![Build Status][ci-image]][ci-url]  [![lint][lint-image]][lint-url]

Valida un número de alumno de la UC. Compatible con cliente y servidor.

## Servidor

### Instalar para Node.js

```sh
npm install uc-numero-alumno --save
```

### Uso en el servidor

```js
const validate = require('uc-numero-alumno');

// With strings
if (validate('1263476J')) {
  // ...
}

// With numbers
if (validate(13546212)) {
  // ...
}
```

## Cliente (Browser)

### Instalar para navegadores

Puedes usarlo con `npm` o con `bower`.

#### Bower

Añade Bower como una dependencia:

```sh
npm install --save-dev bower
```

Instalar esta librería:

```sh
bower install --save uc-numero-alumno
```

Para importarlo en un `.html`:

```html
<!-- Compressed version-->
<script src="bower_components/uc-numero-alumno/dist/uc-numero-alumno.min.js"></script>

<!-- Normal version-->
<script src="bower_components/uc-numero-alumno/dist/uc-numero-alumno.js"></script>
```

Ahora disponemos de la función: `validUCnumber()` que recibe un *string* o un número.

### Uso en el client

```js
// Example with jQuery
$('#text-input').on('input', function() {
  var identifier = $(this).val();
  if (validUCnumber(identifier)) {
    // ...
  }
});
```

[ci-image]: https://travis-ci.org/mrpatiwi/uc-numero-alumno.svg
[ci-url]: https://travis-ci.org/mrpatiwi/uc-numero-alumno
[lint-image]: https://codeclimate.com/github/mrpatiwi/uc-numero-alumno/badges/gpa.svg
[lint-url]: https://codeclimate.com/github/mrpatiwi/uc-numero-alumno

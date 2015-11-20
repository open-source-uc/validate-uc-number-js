'use strict';

const chai = require('chai');
const should = chai.should();

const validador = require('../index');

describe('uc-numero-alumno', () => {
  it('should validate valid number as string', () => {
    validador('14644088').should.be.true;
  });

  it('should validate valid number as number', () => {
    validador(14644088).should.be.true;
  });

  it('should validate valid number with "J"', () => {
    validador('1263476J').should.be.true;
  });

  it('should fail on invalid number', () => {
    validador('12635662').should.be.false;
  });

  it('should fail on invalid number format', () => {
    validador('A!CDEFG@').should.be.false;
  });

  it('should fail on blank input', () => {
    validador('').should.be.false;
    validador(undefined).should.be.false;
  });

  it('should fail on bigger numbers', () => {
    validador("" + Number.MAX_VALUE).should.be.false;
  });
});

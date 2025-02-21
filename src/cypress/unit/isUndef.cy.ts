import { _ch } from '@/index'

describe('isUndef function', () => {
  const isUndef = _ch.isUnDef;

  // Проверяем, что функция возвращает true для undefined
  it('should return true for undefined', () => {
    expect(isUndef(undefined)).to.be.true;
  });

  // Проверяем, что функция возвращает true для null
  it('should return true for null', () => {
    expect(isUndef(null)).to.be.true;
  });

  // Проверяем, что функция возвращает false для числа, так как число не является undefined или null
  it('should return false for a number', () => {
    expect(isUndef(123)).to.be.false;
  });

  // Проверяем, что функция возвращает false для строки, так как строка не является undefined или null
  it('should return false for a string', () => {
    expect(isUndef('not undefined')).to.be.false;
  });

  // Проверяем, что функция возвращает false для булевых значений (true и false), так как они не являются undefined или null
  it('should return false for a boolean', () => {
    expect(isUndef(true)).to.be.false;
    expect(isUndef(false)).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта, так как объект не является undefined или null
  it('should return false for an object', () => {
    expect(isUndef({})).to.be.false;
  });

  // Проверяем, что функция возвращает false для массива, так как массив не является undefined или null
  it('should return false for an array', () => {
    expect(isUndef([])).to.be.false;
  });

  // Проверяем, что функция возвращает false для функции, так как функция не является undefined или null
  it('should return false for a function', () => {
    expect(isUndef(() => {})).to.be.false;
  });

  // Проверяем, что функция возвращает false для символа (Symbol), так как символ не является undefined или null
  it('should return false for a symbol', () => {
    expect(isUndef(Symbol('symbol'))).to.be.false;
  });

  // Проверяем, что функция возвращает false для BigInt, так как BigInt не является undefined или null
  it('should return false for a BigInt', () => {
    expect(isUndef(BigInt(123))).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта даты, так как дата не является undefined или null
  it('should return false for a date object', () => {
    expect(isUndef(new Date())).to.be.false;
  });

  // Проверяем, что функция возвращает false для регулярного выражения, так как regex не является undefined или null
  it('should return false for a regular expression', () => {
    expect(isUndef(/regex/)).to.be.false;
  });

  // Проверяем, что функция возвращает false для пустой строки, так как пустая строка не является undefined или null
  it('should return false for an empty string', () => {
    expect(isUndef('')).to.be.false;
  });

  // Проверяем, что функция возвращает false для нуля, так как ноль не является undefined или null
  it('should return false for zero', () => {
    expect(isUndef(0)).to.be.false;
  });

  // Проверяем, что функция возвращает false для NaN, так как NaN не является undefined или null
  it('should return false for NaN', () => {
    expect(isUndef(NaN)).to.be.false;
  });
});

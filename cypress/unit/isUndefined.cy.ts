import { _checks} from '@/'

describe('isUndefined function', () => {
  const isUndefined = _checks.isUndefined;

  // Проверяем, что функция возвращает true для undefined
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).to.be.true;
  });

  // Проверяем, что функция возвращает true для null
  it('should return true for null', () => {
    expect(isUndefined(null)).to.be.true;
  });

  // Проверяем, что функция возвращает false для числа, так как число не является undefined или null
  it('should return false for a number', () => {
    expect(isUndefined(123)).to.be.false;
  });

  // Проверяем, что функция возвращает false для строки, так как строка не является undefined или null
  it('should return false for a string', () => {
    expect(isUndefined('not undefined')).to.be.false;
  });

  // Проверяем, что функция возвращает false для булевых значений (true и false), так как они не являются undefined или null
  it('should return false for a boolean', () => {
    expect(isUndefined(true)).to.be.false;
    expect(isUndefined(false)).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта, так как объект не является undefined или null
  it('should return false for an object', () => {
    expect(isUndefined({})).to.be.false;
  });

  // Проверяем, что функция возвращает false для массива, так как массив не является undefined или null
  it('should return false for an array', () => {
    expect(isUndefined([])).to.be.false;
  });

  // Проверяем, что функция возвращает false для функции, так как функция не является undefined или null
  it('should return false for a function', () => {
    expect(isUndefined(() => {})).to.be.false;
  });

  // Проверяем, что функция возвращает false для символа (Symbol), так как символ не является undefined или null
  it('should return false for a symbol', () => {
    expect(isUndefined(Symbol('symbol'))).to.be.false;
  });

  // Проверяем, что функция возвращает false для BigInt, так как BigInt не является undefined или null
  it('should return false for a BigInt', () => {
    expect(isUndefined(BigInt(123))).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта даты, так как дата не является undefined или null
  it('should return false for a date object', () => {
    expect(isUndefined(new Date())).to.be.false;
  });

  // Проверяем, что функция возвращает false для регулярного выражения, так как regex не является undefined или null
  it('should return false for a regular expression', () => {
    expect(isUndefined(/regex/)).to.be.false;
  });

  // Проверяем, что функция возвращает false для пустой строки, так как пустая строка не является undefined или null
  it('should return false for an empty string', () => {
    expect(isUndefined('')).to.be.false;
  });

  // Проверяем, что функция возвращает false для нуля, так как ноль не является undefined или null
  it('should return false for zero', () => {
    expect(isUndefined(0)).to.be.false;
  });

  // Проверяем, что функция возвращает false для NaN, так как NaN не является undefined или null
  it('should return false for NaN', () => {
    expect(isUndefined(NaN)).to.be.false;
  });
});

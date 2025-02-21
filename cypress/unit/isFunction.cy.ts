import { _ch } from '../../src/checks'

describe('isFunction function', () => {
  const isFunction = _ch.isFunction;

  // Проверяем, что функция возвращает true для обычной функции
  it('should return true for a regular function', () => {
    expect(isFunction(() => {})).to.be.true;
  });

  // Проверяем, что функция возвращает true для асинхронной функции
  it('should return true for an async function', () => {
    expect(isFunction(async () => {})).to.be.true;
  });

  // Проверяем, что функция возвращает true для генераторной функции
  it('should return true for a generator function', () => {
    expect(isFunction(function* () {})).to.be.true;
  });

  // Проверяем, что функция возвращает true для метода класса
  it('should return true for a class method', () => {
    class Test {
      method() {}
    }
    expect(isFunction(new Test().method)).to.be.true;
  });

  // Проверяем, что функция возвращает true для стрелочной функции
  it('should return true for an arrow function', () => {
    expect(isFunction(() => {})).to.be.true;
  });

  // Проверяем, что функция возвращает false для объекта, так как объект не является функцией
  it('should return false for an object', () => {
    expect(isFunction({})).to.be.false;
  });

  // Проверяем, что функция возвращает false для массива, так как массив не является функцией
  it('should return false for an array', () => {
    expect(isFunction([])).to.be.false;
  });

  // Проверяем, что функция возвращает false для числа, так как число — это примитивный тип
  it('should return false for a number', () => {
    expect(isFunction(123)).to.be.false;
  });

  // Проверяем, что функция возвращает false для строки, так как строка — это примитивный тип
  it('should return false for a string', () => {
    expect(isFunction('not a function')).to.be.false;
  });

  // Проверяем, что функция возвращает false для булевых значений (true и false), так как они — примитивные типы
  it('should return false for a boolean', () => {
    expect(isFunction(true)).to.be.false;
    expect(isFunction(false)).to.be.false;
  });

  // Проверяем, что функция возвращает false для null, так как null не является функцией
  it('should return false for null', () => {
    expect(isFunction(null)).to.be.false;
  });

  // Проверяем, что функция возвращает false для undefined, так как undefined не является функцией
  it('should return false for undefined', () => {
    expect(isFunction(undefined)).to.be.false;
  });

  // Проверяем, что функция возвращает false для символа (Symbol), так как символ — это примитивный тип
  it('should return false for a symbol', () => {
    expect(isFunction(Symbol('symbol'))).to.be.false;
  });

  // Проверяем, что функция возвращает false для BigInt, так как BigInt — это примитивный тип
  it('should return false for a BigInt', () => {
    expect(isFunction(BigInt(123))).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта даты, так как дата не является функцией
  it('should return false for a date object', () => {
    expect(isFunction(new Date())).to.be.false;
  });

  // Проверяем, что функция возвращает false для регулярного выражения, так как regex не является функцией
  it('should return false for a regular expression', () => {
    expect(isFunction(/regex/)).to.be.false;
  });
});

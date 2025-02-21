import { _ch } from '@/index'

describe('isObject function', () => {
  const isObject =_ch.isObject;

  // Проверяем, что функция возвращает true для пустого объекта
  it('should return true for an empty object', () => {
    expect(isObject({})).to.be.true;
  });

  // Проверяем, что функция возвращает true для непустого объекта
  it('should return true for a non-empty object', () => {
    expect(isObject({ key: 'value' })).to.be.true;
  });

  // Проверяем, что функция возвращает true для массива, так как массив — это объект в JavaScript
  it('should return true for an array', () => {
    expect(isObject([1, 2, 3])).to.be.true;
  });

  // Проверяем, что функция возвращает false для null, так как null не считается объектом
  it('should return false for null', () => {
    expect(isObject(null)).to.be.false;
  });

  // Проверяем, что функция возвращает false для undefined, так как undefined не является объектом
  it('should return false for undefined', () => {
    expect(isObject(undefined)).to.be.false;
  });

  // Проверяем, что функция возвращает false для числа, так как число — это примитивный тип
  it('should return false for a number', () => {
    expect(isObject(123)).to.be.false;
  });

  // Проверяем, что функция возвращает false для строки, так как строка — это примитивный тип
  it('should return false for a string', () => {
    expect(isObject('not an object')).to.be.false;
  });

  // Проверяем, что функция возвращает false для булевых значений (true и false), так как они — примитивные типы
  it('should return false for a boolean', () => {
    expect(isObject(true)).to.be.false;
    expect(isObject(false)).to.be.false;
  });

  // Проверяем, что функция возвращает false для функции, так как функция — это объект, но typeof function === 'function'
  it('should return false for a function', () => {
    expect(isObject(() => {})).to.be.false;
  });

  // Проверяем, что функция возвращает true для объекта даты, так как дата — это объект
  it('should return true for a date object', () => {
    expect(isObject(new Date())).to.be.true;
  });

  // Проверяем, что функция возвращает true для регулярного выражения, так как regex — это объект
  it('should return true for a regular expression', () => {
    expect(isObject(/regex/)).to.be.true;
  });

  // Проверяем, что функция возвращает false для символа (Symbol), так как символ — это примитивный тип
  it('should return false for a symbol', () => {
    expect(isObject(Symbol('symbol'))).to.be.false;
  });

  // Проверяем, что функция возвращает false для BigInt, так как BigInt — это примитивный тип
  it('should return false for a BigInt', () => {
    expect(isObject(BigInt(123))).to.be.false;
  });
});

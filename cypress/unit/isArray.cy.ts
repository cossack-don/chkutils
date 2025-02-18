import { _checks} from '@/'

describe('isArray function', () => {
  const isArray = _checks.isArray;

  // Проверяем, что функция корректно определяет пустой массив
  it('should return true for an empty array', () => {
    expect(isArray([])).to.be.true;
  });

  // Проверяем, что функция корректно определяет непустой массив
  it('should return true for a non-empty array', () => {
    expect(isArray([1, 2, 3])).to.be.true;
  });

  // Проверяем, что функция возвращает false для строки, так как строка не является массивом
  it('should return false for a string', () => {
    expect(isArray('not an array')).to.be.false;
  });

  // Проверяем, что функция возвращает false для числа, так как число не является массивом
  it('should return false for a number', () => {
    expect(isArray(123)).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта, так как объект не является массивом
  it('should return false for an object', () => {
    expect(isArray({ key: 'value' })).to.be.false;
  });

  // Проверяем, что функция возвращает false для null, так как null не является массивом
  it('should return false for null', () => {
    expect(isArray(null)).to.be.false;
  });

  // Проверяем, что функция возвращает false для undefined, так как undefined не является массивом
  it('should return false for undefined', () => {
    expect(isArray(undefined)).to.be.false;
  });

  // Проверяем, что функция возвращает false для булевых значений (true и false), так как они не являются массивами
  it('should return false for a boolean', () => {
    expect(isArray(true)).to.be.false;
    expect(isArray(false)).to.be.false;
  });

  // Проверяем, что функция возвращает false для функции, так как функция не является массивом
  it('should return false for a function', () => {
    expect(isArray(() => {})).to.be.false;
  });

  // Проверяем, что функция возвращает false для объекта даты, так как дата не является массивом
  it('should return false for a date object', () => {
    expect(isArray(new Date())).to.be.false;
  });

  // Проверяем, что функция возвращает false для регулярного выражения, так как regex не является массивом
  it('should return false for a regular expression', () => {
    expect(isArray(/regex/)).to.be.false;
  });
});

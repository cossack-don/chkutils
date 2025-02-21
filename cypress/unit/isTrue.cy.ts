import { _ch } from '../../src/checks'

describe('isTrue function', () => {
  const isTrue = _ch.isTrue

  it('should return true if the value is true', () => {
    // Проверяем, что функция возвращает true для значения true
    expect(isTrue(true)).to.be.true;
  });

  it('should return false if the value is not true', () => {
    // Проверяем, что функция возвращает false для других значений
    expect(isTrue(false)).to.be.false; // false
    expect(isTrue(1)).to.be.false; // число
    expect(isTrue('true')).to.be.false; // строка
    expect(isTrue({})).to.be.false; // объект
    expect(isTrue([])).to.be.false; // массив
    expect(isTrue(null)).to.be.false; // null
    expect(isTrue(undefined)).to.be.false; // undefined
  });
});

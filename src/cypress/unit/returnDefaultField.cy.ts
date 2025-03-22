import { _h } from "@/index";

// Функция, которую мы тестируем
const returnDefaultField = _h.returnDefaultField;

describe('defaultTo function', () => {
  it('должна вернуть значение по умолчанию, если value равно undefined', () => {
    const result = returnDefaultField(undefined);
    expect(result).to.deep.equal({ text: 'Нет данных' });
  });

  it('должна вернуть значение по умолчанию, если value равно null', () => {
    const result = returnDefaultField(null);
    expect(result).to.deep.equal({ text: 'Нет данных' });
  });

  it('должна вернуть переданное значение, если оно определено (число)', () => {
    const result = returnDefaultField(42);
    expect(result).to.equal(42);
  });

  it('должна вернуть переданное значение, если оно определено (строка)', () => {
    const result = returnDefaultField('Hello');
    expect(result).to.equal('Hello');
  });

  it('должна вернуть кастомное значение по умолчанию, если value равно undefined и передано кастомное значение', () => {
    const result = returnDefaultField(undefined, { message: 'Custom default' });
    expect(result).to.deep.equal({ message: 'Custom default' });
  });

  it('должна вернуть кастомное значение по умолчанию, если value равно null и передано кастомное значение', () => {
    const result = returnDefaultField(null, { message: 'Custom default' });
    expect(result).to.deep.equal({ message: 'Custom default' });
  });

  it('должна вернуть переданное значение, если оно определено (объект)', () => {
    const value = { key: 'value' };
    const result = returnDefaultField(value);
    expect(result).to.deep.equal(value);
  });

  it('должна вернуть переданное значение, если оно определено (массив)', () => {
    const value = [1, 2, 3];
    const result = returnDefaultField(value);
    expect(result).to.deep.equal(value);
  });

  it('должна вернуть переданное значение, если оно определено (булевое значение)', () => {
    const result = returnDefaultField(true);
    expect(result).to.equal(true);
  });

  it('должна вернуть переданное значение, если оно равно нулю (0)', () => {
    const result = returnDefaultField(0);
    expect(result).to.equal(0);
  });
});

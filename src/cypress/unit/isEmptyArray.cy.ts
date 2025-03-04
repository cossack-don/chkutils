import { _ch } from "@/index";

// Функция, которую мы тестируем
const isEmptyArray = _ch.isEmptyArray;

describe('isEmptyArray function', () => {
  it('должна возвращать true для пустого массива', () => {
    const arr: unknown[] = [];
    expect(isEmptyArray(arr)).to.be.true;
  });

  it('должна возвращать false для непустого массива', () => {
    const arr: unknown[] = [1, 2, 3];
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для массива с пустыми элементами', () => {
    const arr: unknown[] = [null, undefined, ''];
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для null', () => {
    const arr = null;
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для undefined', () => {
    const arr = undefined;
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для числа', () => {
    const arr = 42;
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для строки', () => {
    const arr = 'test';
    expect(isEmptyArray(arr)).to.be.false;
  });

  it('должна возвращать false для объекта', () => {
    const arr = { key: 'value' };
    expect(isEmptyArray(arr)).to.be.false;
  });
})

import { _ch } from "@/index";

// Функция, которую мы тестируем
const isEmptyObject = _ch.isEmptyObject;

describe('isEmptyObject function', () => {
  it('должна возвращать true для пустого объекта', () => {
    const obj = {};
    expect(isEmptyObject(obj)).to.be.true;
  });

  it('должна возвращать false для непустого объекта', () => {
    const obj = { key: 'value' };
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для null', () => {
    const obj = null;
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для undefined', () => {
    const obj = undefined;
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для необъектных типов (число)', () => {
    const obj = 42;
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для необъектных типов (строка)', () => {
    const obj = 'test';
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для необъектных типов (булевый)', () => {
    const obj = true;
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для массива', () => {
    const obj = [];
    expect(isEmptyObject(obj)).to.be.false;
  });

  it('должна возвращать false для непустого массива', () => {
    const obj = [1, 2, 3];
    expect(isEmptyObject(obj)).to.be.false;
  });
})

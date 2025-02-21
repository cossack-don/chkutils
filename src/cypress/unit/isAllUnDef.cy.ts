import { _ch } from '@/index';

describe('isAllUnDef function', () => {
  const isAllUnDef = _ch.isAllUnDef;

  // Тест 1: Проверка на `undefined`
  it('should return true for undefined', () => {
    cy.wrap(isAllUnDef(undefined)).should('be.true'); // Ожидаем true, так как значение undefined
  });

  // Тест 2: Проверка на `null`
  it('should return true for null', () => {
    cy.wrap(isAllUnDef(null)).should('be.true'); // Ожидаем true, так как значение null
  });

  // Тест 3: Проверка на `NaN`
  it('should return true for NaN', () => {
    cy.wrap(isAllUnDef(NaN)).should('be.true'); // Ожидаем true, так как значение NaN
  });

  // Тест 4: Проверка на число
  it('should return false for a number', () => {
    cy.wrap(isAllUnDef(42)).should('be.false'); // Ожидаем false, так как число не является undefined, null или NaN
  });

  // Тест 5: Проверка на строку
  it('should return false for a string', () => {
    cy.wrap(isAllUnDef('hello')).should('be.false'); // Ожидаем false, так как строка не является undefined, null или NaN
  });

  // Тест 6: Проверка на пустую строку
  it('should return false for an empty string', () => {
    cy.wrap(isAllUnDef('')).should('be.false'); // Ожидаем false, так как пустая строка не является undefined, null или NaN
  });

  // Тест 7: Проверка на объект
  it('should return false for an object', () => {
    cy.wrap(isAllUnDef({})).should('be.false'); // Ожидаем false, так как объект не является undefined, null или NaN
  });

  // Тест 8: Проверка на массив
  it('should return false for an array', () => {
    cy.wrap(isAllUnDef([])).should('be.false'); // Ожидаем false, так как массив не является undefined, null или NaN
  });

  // Тест 9: Проверка на `false`
  it('should return false for false', () => {
    cy.wrap(isAllUnDef(false)).should('be.false'); // Ожидаем false, так как false не является undefined, null или NaN
  });

  // Тест 10: Проверка на `true`
  it('should return false for true', () => {
    cy.wrap(isAllUnDef(true)).should('be.false'); // Ожидаем false, так как true не является undefined, null или NaN
  });

  // Тест 11: Проверка на `0`
  it('should return false for 0', () => {
    cy.wrap(isAllUnDef(0)).should('be.false'); // Ожидаем false, так как 0 не является undefined, null или NaN
  });

  // Тест 12: Проверка на пустой объект
  it('should return false for an empty object', () => {
    cy.wrap(isAllUnDef({})).should('be.false'); // Ожидаем false, так как пустой объект не является undefined, null или NaN
  });

  // Тест 13: Проверка на функцию
  it('should return false for a function', () => {
    cy.wrap(isAllUnDef(() => {})).should('be.false'); // Ожидаем false, так как функция не является undefined, null или NaN
  });

  // Тест 14: Проверка на Symbol
  it('should return false for a Symbol', () => {
    cy.wrap(isAllUnDef(Symbol('test'))).should('be.false'); // Ожидаем false, так как Symbol не является undefined, null или NaN
  });

  // Тест 15: Проверка на BigInt
  it('should return false for a BigInt', () => {
    cy.wrap(isAllUnDef(BigInt(123))).should('be.false'); // Ожидаем false, так как BigInt не является undefined, null или NaN
  });
});

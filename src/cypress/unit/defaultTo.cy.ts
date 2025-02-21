import { _h } from "@/index";

// Функция, которую мы тестируем
const defaultTo = _h.defaultTo;

describe('defaultTo function', () => {
  // Тест 1: Возвращает значение по умолчанию, если передано `undefined`
  it('should return default payload for undefined', () => {
    const result = defaultTo(undefined);
    cy.wrap(result).should('deep.equal', { text: 'Нет данных' }); // Ожидаем объект по умолчанию
  });

  // Тест 2: Возвращает значение по умолчанию, если передано `null`
  it('should return default payload for null', () => {
    const result = defaultTo(null);
    cy.wrap(result).should('deep.equal', { text: 'Нет данных' }); // Ожидаем объект по умолчанию
  });

  // Тест 3: Возвращает значение по умолчанию, если передано `NaN`
  it('should return default payload for NaN', () => {
    const result = defaultTo(NaN);
    cy.wrap(result).should('deep.equal', { text: 'Нет данных' }); // Ожидаем объект по умолчанию
  });

  // Тест 4: Возвращает переданное значение, если оно не `undefined`, `null` или `NaN`
  it('should return the original value if it is not undefined, null, or NaN', () => {
    const value = 42;
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 5: Возвращает переданное значение, если это строка
  it('should return the original value if it is a string', () => {
    const value = 'hello';
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 6: Возвращает переданное значение, если это объект
  it('should return the original value if it is an object', () => {
    const value = { key: 'value' };
    const result = defaultTo(value);
    cy.wrap(result).should('deep.equal', value); // Ожидаем исходное значение
  });

  // Тест 7: Возвращает переданное значение, если это массив
  it('should return the original value if it is an array', () => {
    const value = [1, 2, 3];
    const result = defaultTo(value);
    cy.wrap(result).should('deep.equal', value); // Ожидаем исходное значение
  });

  // Тест 8: Возвращает переданное значение, если это `false`
  it('should return the original value if it is false', () => {
    const value = false;
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 9: Возвращает переданное значение, если это `0`
  it('should return the original value if it is 0', () => {
    const value = 0;
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 10: Возвращает переданное значение, если это пустая строка
  it('should return the original value if it is an empty string', () => {
    const value = '';
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 11: Возвращает переданное значение, если это функция
  it('should return the original value if it is a function', () => {
    const value = () => {};
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 12: Возвращает переданное значение, если это `Symbol`
  it('should return the original value if it is a Symbol', () => {
    const value = Symbol('test');
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 13: Возвращает переданное значение, если это `BigInt`
  it('should return the original value if it is a BigInt', () => {
    const value = BigInt(123);
    const result = defaultTo(value);
    cy.wrap(result).should('equal', value); // Ожидаем исходное значение
  });

  // Тест 14: Возвращает кастомный payload, если передано `undefined`
  it('should return custom payload for undefined', () => {
    const customPayload = { text: 'Custom data' };
    const result = defaultTo(undefined, customPayload);
    cy.wrap(result).should('deep.equal', customPayload); // Ожидаем кастомный payload
  });

  // Тест 15: Возвращает кастомный payload, если передано `null`
  it('should return custom payload for null', () => {
    const customPayload = { text: 'Custom data' };
    const result = defaultTo(null, customPayload);
    cy.wrap(result).should('deep.equal', customPayload); // Ожидаем кастомный payload
  });

  // Тест 16: Возвращает кастомный payload, если передано `NaN`
  it('should return custom payload for NaN', () => {
    const customPayload = { text: 'Custom data' };
    const result = defaultTo(NaN, customPayload);
    cy.wrap(result).should('deep.equal', customPayload); // Ожидаем кастомный payload
  });
});

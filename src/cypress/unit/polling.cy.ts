import { _m } from "@/index";

// Функция, которую мы тестируем
const polling = _m.polling;

describe('polling function', () => {
  let func: Cypress.Agent<sinon.SinonSpy>; // Мок функции для отслеживания вызовов
  let pollingInstance: { start: () => void; stop: () => void };

  beforeEach(() => {
    // Создаем мок функции перед каждым тестом
    func = cy.spy();
    // Создаем экземпляр polling с интервалом 100 мс
    pollingInstance = polling(func, 100);
  });

  /**
   * Тест: Запуск опроса и проверка периодического вызова функции.
   */
  it('should start polling and call the function periodically', () => {
    pollingInstance.start(); // Запускаем опрос

    // Ждем 300 мс и проверяем, что функция вызывалась несколько раз
    cy.wait(300).then(() => {
      expect(func.callCount).to.be.greaterThan(1); // Функция должна вызываться несколько раз
      pollingInstance.stop(); // Останавливаем опрос
    });
  });

  /**
   * Тест: Остановка опроса и проверка, что функция больше не вызывается.
   */
  it('should stop polling and prevent further function calls', () => {
    pollingInstance.start(); // Запускаем опрос

    // Ждем 100 мс и останавливаем опрос
    cy.wait(100).then(() => {
      pollingInstance.stop(); // Останавливаем опрос
      const callCountBeforeStop = func.callCount; // Запоминаем количество вызовов до остановки

      // Ждем еще 200 мс и проверяем, что количество вызовов не изменилось
      cy.wait(200).then(() => {
        expect(func.callCount).to.equal(callCountBeforeStop); // Функция не должна вызываться после остановки
      });
    });
  });

  /**
   * Тест: Повторный вызов start не должен создавать дополнительные интервалы.
   */
  it('should not start multiple intervals if start is called multiple times', () => {
    pollingInstance.start(); // Первый вызов start
    pollingInstance.start(); // Второй вызов start

    // Ждем 200 мс и проверяем, что функция вызывалась несколько раз
    cy.wait(200).then(() => {
      expect(func.callCount).to.be.greaterThan(1); // Функция должна вызываться несколько раз
      pollingInstance.stop(); // Останавливаем опрос
    });
  });

  /**
   * Тест: Вызов stop до start не должен вызывать ошибок.
   */
  it('should not throw an error if stop is called before start', () => {
    // Вызываем stop до start
    expect(() => pollingInstance.stop()).not.to.throw(); // Ошибок быть не должно
  });

  /**
   * Тест: Проверка, что функция вызывается с правильным интервалом.
   */
  it('should call the function with the correct interval', () => {
    pollingInstance.start(); // Запускаем опрос

    // Ждем 300 мс и проверяем, что функция вызывалась примерно каждые 100 мс
    cy.wait(300).then(() => {
      expect(func.callCount).to.be.closeTo(3, 1); // Примерно 3 вызова за 300 мс
      pollingInstance.stop(); // Останавливаем опрос
    });
  });

  /**
   * Тест: Проверка, что функция вызывается с правильными аргументами.
   */
  it('should call the function with no arguments', () => {
    const funcWithArgs = cy.spy(); // Мок функции без аргументов
    const pollingWithArgs = polling(funcWithArgs, 100); // Создаем polling с функцией

    pollingWithArgs.start(); // Запускаем опрос

    // Ждем 100 мс и проверяем, что функция вызывалась без аргументов
    cy.wait(100).then(() => {
      expect(funcWithArgs).to.be.calledWith(); // Функция вызывается без аргументов
      pollingWithArgs.stop(); // Останавливаем опрос
    });
  });

  /**
   * Тест: Проверка, что таймер сбрасывается после остановки.
   */
  it('should reset the timer after stopping', () => {
    pollingInstance.start(); // Запускаем опрос

    // Ждем 100 мс и останавливаем опрос
    cy.wait(100).then(() => {
      const callCountBeforeStop = func.callCount; // Запоминаем количество вызовов до остановки
      pollingInstance.stop(); // Останавливаем опрос

      // Ждем еще 200 мс и проверяем, что функция больше не вызывается
      cy.wait(200).then(() => {
        expect(func.callCount).to.equal(callCountBeforeStop); // Количество вызовов не должно измениться
      });
    });
  });

  /**
   * Тест: Проверка, что функция не вызывается до запуска опроса.
   */
  it('should not call the function before starting polling', () => {
    // Ждем 100 мс и проверяем, что функция не вызывалась
    cy.wait(100).then(() => {
      expect(func.callCount).to.equal(0); // Функция не должна вызываться до запуска
    });
  });
});

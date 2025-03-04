import { _m } from "@/index";

// Функция, которую мы тестируем
const debounce = _m.debounce;

describe('debounce function', () => {

  //1. Базовый тест: функция вызывается после задержки
  it('should call the function after the wait time', () => {
    const func = cy.stub(); // Мок функции
    const debouncedFunc = debounce(func, 100); // Задержка 100 мс

    debouncedFunc(); // Вызов функции
    expect(func).not.to.be.called; // Функция не должна вызваться сразу

    cy.wait(150).then(() => {
      expect(func).to.be.calledOnce; // Функция должна вызваться после задержки
    });
  });

  //2. Функция не вызывается, если задержка не завершена
  it('should not call the function if the wait time is not over', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(); // Вызов функции
    cy.wait(50).then(() => {
      expect(func).not.to.be.called; // Функция не должна вызваться до завершения задержки
    });
  });

  //3. Функция вызывается сразу, если immediate = true
  it('should call the function immediately if immediate is true', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100, true);

    debouncedFunc(); // Вызов функции
    expect(func).to.be.calledOnce; // Функция должна вызваться сразу
  });

  //4. Функция не вызывается повторно, если задержка не завершена
  it('should not call the function multiple times if called within the wait time', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(); // Первый вызов
    debouncedFunc(); // Второй вызов (в течение задержки)
    debouncedFunc(); // Третий вызов (в течение задержки)

    cy.wait(150).then(() => {
      expect(func).to.be.calledOnce; // Функция должна вызваться только один раз
    });
  });

  //5. Функция вызывается повторно после завершения задержки
  it('should call the function again after the wait time is over', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(); // Первый вызов
    cy.wait(150).then(() => {
      debouncedFunc(); // Второй вызов (после завершения задержки)
      cy.wait(150).then(() => {
        expect(func).to.be.calledTwice; // Функция должна вызваться дважды
      });
    });
  });

  //6. Функция вызывается с правильными аргументами
  it('should call the function with the correct arguments', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc('arg1', 'arg2'); // Вызов с аргументами
    cy.wait(150).then(() => {
      expect(func).to.be.calledWith('arg1', 'arg2'); // Функция должна вызваться с аргументами
    });
  });

  //7. Функция не вызывается, если задержка сброшена
  it('should not call the function if the delay is reset', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(); // Первый вызов
    cy.wait(50).then(() => {
      debouncedFunc(); // Второй вызов (сбрасывает таймер)
      cy.wait(150).then(() => {
        expect(func).to.be.calledOnce; // Функция должна вызваться только один раз
      });
    });
  });

  //8. Функция вызывается сразу при immediate = true, но не повторно
  it('should call the function immediately but not again until the wait time is over', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100, true);

    debouncedFunc(); // Первый вызов
    expect(func).to.be.calledOnce; // Функция должна вызваться сразу

    debouncedFunc(); // Второй вызов (в течение задержки)
    cy.wait(150).then(() => {
      expect(func).to.be.calledOnce; // Функция не должна вызваться повторно
    });
  });

  //9. Функция вызывается повторно после завершения задержки при immediate = true
  it('should call the function again after the wait time is over with immediate true', () => {
    const func = cy.stub();
    const debouncedFunc = debounce(func, 100, true);

    debouncedFunc(); // Первый вызов
    expect(func).to.be.calledOnce; // Функция должна вызваться сразу

    cy.wait(150).then(() => {
      debouncedFunc(); // Второй вызов (после завершения задержки)
      cy.wait(150).then(() => {
        expect(func).to.be.calledTwice; // Функция должна вызваться дважды
      });
    });
  });
});

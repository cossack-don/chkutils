import { _h } from "@/index";

// Функция, которую мы тестируем
const cloneDeep = _h.cloneDeep;


describe('cloneDeep function', () => {

  //1. Копирование примитивов
  it('should clone primitives correctly', () => {
    expect(cloneDeep(42)).to.equal(42); // Число
    expect(cloneDeep('hello')).to.equal('hello'); // Строка
    expect(cloneDeep(true)).to.equal(true); // Булево значение
    expect(cloneDeep(null)).to.equal(null); // null
    expect(cloneDeep(undefined)).to.equal(undefined); // undefined
  });

  //2. Копирование объектов
  it('should clone objects deeply', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Объекты должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
    expect(cloned.b).not.to.equal(original.b); // Вложенные объекты тоже разные
  });

  //3. Копирование массивов
  it('should clone arrays deeply', () => {
    const original = [1, 2, { a: 3 }];
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Массивы должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные массивы
    expect(cloned[2]).not.to.equal(original[2]); // Вложенные объекты тоже разные
  });

  //4. Копирование Date
  it('should clone Date objects', () => {
    const original = new Date();
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Даты должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
  });

  //5. Копирование Map
  it('should clone Map objects', () => {
    const original = new Map([['key1', 'value1'], ['key2', { a: 1 }]]);
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Map должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
    expect(cloned.get('key2')).not.to.equal(original.get('key2')); // Вложенные объекты тоже разные
  });

  //6. Копирование Set
  it('should clone Set objects', () => {
    const original = new Set([1, 2, { a: 3 }]);
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Set должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
    expect([...cloned][2]).not.to.equal([...original][2]); // Вложенные объекты тоже разные
  });

  //7. Копирование циклических ссылок
  it('should handle circular references', () => {
    const original: any = { a: 1 };
    original.self = original; // Циклическая ссылка

    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Объекты должны быть равны
    expect(cloned.self).to.equal(cloned); // Циклическая ссылка должна сохраниться
  });

  //8. Копирование функций
  it('should clone functions', () => {
    const original = { a: () => {} };
    const cloned = cloneDeep(original);

    expect(cloned.a).to.equal(original.a); // Функции должны быть равны
  });

  //9. Копирование сложных структур
  it('should clone complex structures', () => {
    const original = {
      a: 1,
      b: [2, 3, { c: 4 }],
      c: new Date(),
      d: new Map([['key1', 'value1']]),
      e: new Set([1, 2, 3]),
    };
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Структуры должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
    expect(cloned.b).not.to.equal(original.b); // Вложенные массивы тоже разные
    expect(cloned.d).not.to.equal(original.d); // Вложенные Map тоже разные
    expect(cloned.e).not.to.equal(original.e); // Вложенные Set тоже разные
  });

  //10. Копирование null и undefined
  it('should clone null and undefined', () => {
    expect(cloneDeep(null)).to.equal(null); // null
    expect(cloneDeep(undefined)).to.equal(undefined); // undefined
  });

  //11. Копирование вложенных Map и Set
  it('should clone nested Map and Set', () => {
    const original = {
      a: new Map([['key1', new Set([1, 2, 3])]]),
    };
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Структуры должны быть равны
    expect(cloned.a).not.to.equal(original.a); // Но это разные объекты
    expect(cloned.a.get('key1')).not.to.equal(original.a.get('key1')); // Вложенные Set тоже разные
  });

  //12. Копирование объектов с символами
  it('should clone objects with symbols', () => {
    const sym = Symbol('test');
    const original = { [sym]: 'value' };
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Объекты должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
  });

  //13. Копирование RegExp
  it('should clone RegExp objects', () => {
    const original = /test/g;
    const cloned = cloneDeep(original);

    expect(cloned).to.deep.equal(original); // Регулярные выражения должны быть равны
    expect(cloned).not.to.equal(original); // Но это разные объекты
  });

  // 14. Копирование BigInt
  it('should clone BigInt', () => {
    const original = BigInt(123);
    const cloned = cloneDeep(original);

    expect(cloned).to.equal(original); // BigInt должны быть равны
  });

  //15. Копирование Promise
  it('should clone Promise', () => {
    const original = Promise.resolve(42);
    const cloned = cloneDeep(original);

    expect(cloned).to.equal(original); // Promise должны быть равны
  });

})

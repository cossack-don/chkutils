import { _a } from "@/index";
import { Options } from "@/adapters/utilsCase";

const DefaultOption: Options = {
  recursive: true,
  recursiveInArray: true,
  keepTypesOnRecursion: [],
};

// Функция, которую мы тестируем
const toCamelCaseCollection = _a.toCamelCaseCollection;

describe('toCamelCaseCollection function', () => {
  it('должна преобразовывать ключи объекта в camelCase', () => {
    const obj = { first_name: 'John', last_name: 'Doe' };
    const result = toCamelCaseCollection(obj);
    expect(result).to.deep.equal({ firstName: 'John', lastName: 'Doe' });
  });

  it('должна возвращать null для некорректного объекта (не объект)', () => {
    const obj = null;
    const result = toCamelCaseCollection(obj);
    expect(result).to.be.null;
  });

  it('должна возвращать null для некорректного объекта (примитив)', () => {
    const obj = 42;
    const result = toCamelCaseCollection(obj);
    expect(result).to.be.null;
  });

  it('должна рекурсивно преобразовывать вложенные объекты', () => {
    const obj = { user_info: { first_name: 'John', last_name: 'Doe' } };
    const result = toCamelCaseCollection(obj, { recursive: true });
    expect(result).to.deep.equal({ userInfo: { firstName: 'John', lastName: 'Doe' } });
  });

  it('должна рекурсивно преобразовывать массивы объектов', () => {
    const obj = { users: [{ first_name: 'John' }, { last_name: 'Doe' }] };
    const result = toCamelCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ users: [{ firstName: 'John' }, { lastName: 'Doe' }] });
  });

  it('должна сохранять типы, указанные в keepTypesOnRecursion', () => {
    const obj = { user_info: { first_name: 'John', created_at: new Date() } };
    const result = toCamelCaseCollection(obj, {
      recursive: true,
      keepTypesOnRecursion: [Date],
    });
    expect(result.userInfo.createdAt).to.be.instanceOf(Date);
  });

  it('должна корректно обрабатывать массивы внутри массивов', () => {
    const obj = { nested_array: [[{ first_name: 'John' }]] };
    const result = toCamelCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ nestedArray: [[{ firstName: 'John' }]] });
  });

  it('должна корректно обрабатывать пустой объект', () => {
    const obj = {};
    const result = toCamelCaseCollection(obj);
    expect(result).to.deep.equal({});
  });

  it('должна корректно обрабатывать пустой массив', () => {
    const obj = { empty_array: [] };
    const result = toCamelCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ emptyArray: [] });
  });

  it('должна корректно обрабатывать объект с опциями по умолчанию', () => {
    const obj = { first_name: 'John', user_info: { last_name: 'Doe' } };
    const result = toCamelCaseCollection(obj, DefaultOption);

    // Ожидаемый результат
    const expected = { firstName: 'John', userInfo: { lastName: 'Doe' } };

    // Проверяем, что результат соответствует ожидаемому
    expect(result).to.deep.equal(expected);
  });
})

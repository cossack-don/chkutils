import { _p } from "@/index";
import { Options } from "@/patterns/adapters/utilsCase";

const DefaultOption: Options = {
  recursive: true,
  recursiveInArray: true,
  keepTypesOnRecursion: [],
};

// Функция, которую мы тестируем
const toSnakeCaseCollection = _p.toSnakeCaseCollection;

describe('toSnakeCaseCollection function', () => {
  it('должна преобразовывать ключи объекта в snake_case', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    const result = toSnakeCaseCollection(obj);
    expect(result).to.deep.equal({ first_name: 'John', last_name: 'Doe' });
  });

  it('должна возвращать null для некорректного объекта (не объект)', () => {
    const obj = null;
    const result = toSnakeCaseCollection(obj);
    expect(result).to.be.null;
  });

  it('должна возвращать null для некорректного объекта (примитив)', () => {
    const obj = 42;
    const result = toSnakeCaseCollection(obj);
    expect(result).to.be.null;
  });

  it('должна рекурсивно преобразовывать вложенные объекты', () => {
    const obj = { userInfo: { firstName: 'John', lastName: 'Doe' } };
    const result = toSnakeCaseCollection(obj, { recursive: true });
    expect(result).to.deep.equal({ user_info: { first_name: 'John', last_name: 'Doe' } });
  });

  it('должна рекурсивно преобразовывать массивы объектов', () => {
    const obj = { users: [{ firstName: 'John' }, { lastName: 'Doe' }] };
    const result = toSnakeCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ users: [{ first_name: 'John' }, { last_name: 'Doe' }] });
  });

  it('должна сохранять типы, указанные в keepTypesOnRecursion', () => {
    const obj = { userInfo: { firstName: 'John', createdAt: new Date() } };
    const result = toSnakeCaseCollection(obj, {
      recursive: true,
      keepTypesOnRecursion: [Date],
    });
    expect(result.user_info.created_at).to.be.instanceOf(Date);
  });

  it('должна корректно обрабатывать массивы внутри массивов', () => {
    const obj = { nestedArray: [[{ firstName: 'John' }]] };
    const result = toSnakeCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ nested_array: [[{ first_name: 'John' }]] });
  });

  it('должна корректно обрабатывать пустой объект', () => {
    const obj = {};
    const result = toSnakeCaseCollection(obj);
    expect(result).to.deep.equal({});
  });

  it('должна корректно обрабатывать пустой массив', () => {
    const obj = { emptyArray: [] };
    const result = toSnakeCaseCollection(obj, { recursive: true, recursiveInArray: true });
    expect(result).to.deep.equal({ empty_array: [] });
  });

  it('должна корректно обрабатывать объект с опциями по умолчанию', () => {
    const obj = { firstName: 'John', userInfo: { lastName: 'Doe' } };
    const result = toSnakeCaseCollection(obj, DefaultOption);
    expect(result).to.deep.equal({ first_name: 'John', user_info: { last_name: 'Doe' } });
  });
})

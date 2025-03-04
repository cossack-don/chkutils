import { _a } from "@/index";

// Функция, которую мы тестируем
const toSnakeCasePrimitive = _a.toSnakeCasePrimitive;

describe('toSnakeCasePrimitive function', () => {
  it('должна возвращать пустую строку для пустой строки', () => {
    const str = '';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('');
  });

  it('должна преобразовывать camelCase в snake_case', () => {
    const str = 'camelCaseString';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('camel_case_string');
  });

  it('должна преобразовывать PascalCase в snake_case', () => {
    const str = 'PascalCaseString';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('pascal_case_string');
  });

  it('должна преобразовывать строку с пробелами в snake_case', () => {
    const str = 'string with spaces';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_spaces');
  });

  it('должна преобразовывать строку с дефисами в snake_case', () => {
    const str = 'string-with-hyphens';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_hyphens');
  });

  it('должна преобразовывать строку с различными символами в snake_case', () => {
    const str = 'stringWith!@#$%^&*()Symbols';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_symbols');
  });

  it('должна преобразовывать строку с уже имеющимися символами подчеркивания', () => {
    const str = 'string_with_underscores';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_underscores');
  });

  it('должна преобразовывать строку с несколькими заглавными буквами подряд', () => {
    const str = 'stringWITHMultipleCAPITALS';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_multiple_capitals');
  });

  it('должна преобразовывать строку с цифрами', () => {
    const str = 'stringWith123Numbers';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_123_numbers');
  });

  it('должна преобразовывать строку с начальными и конечными небуквенно-цифровыми символами', () => {
    const str = '!!!stringWithSymbols!!!';
    const result = toSnakeCasePrimitive(str);
    expect(result).to.equal('string_with_symbols');
  });
})

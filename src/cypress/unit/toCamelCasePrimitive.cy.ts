import { _p } from "@/index";

// Функция, которую мы тестируем
const toCamelCasePrimitive = _p.toCamelCasePrimitive;

describe('toCamelCasePrimitive function', () => {
  it('должна возвращать пустую строку для пустой строки', () => {
    const str = '';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('');
  });

  it('должна преобразовывать snake_case в camelCase', () => {
    const str = 'snake_case_string';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('snakeCaseString');
  });

  it('должна преобразовывать kebab-case в camelCase', () => {
    const str = 'kebab-case-string';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('kebabCaseString');
  });

  it('должна преобразовывать строку с пробелами в camelCase', () => {
    const str = 'string with spaces';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithSpaces');
  });

  it('должна преобразовывать строку с различными символами в camelCase', () => {
    const str = 'stringWith!@#$%^&*()Symbols';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithSymbols');
  });

  it('должна преобразовывать строку с уже имеющимися символами подчеркивания', () => {
    const str = 'string_with_underscores';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithUnderscores');
  });

  it('должна преобразовывать строку с несколькими заглавными буквами подряд', () => {
    const str = 'stringWITHMultipleCAPITALS';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithMultipleCapitals');
  });

  it('должна преобразовывать строку с цифрами', () => {
    const str = 'stringWith123Numbers';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWith123Numbers');
  });

  it('должна преобразовывать строку с начальными и конечными небуквенно-цифровыми символами', () => {
    const str = '!!!stringWithSymbols!!!';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithSymbols');
  });

  it('должна преобразовывать строку с mixedCase', () => {
    const str = 'mixedCaseString';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('mixedCaseString');
  });

  it('должна преобразовывать строку с несколькими разделителями подряд', () => {
    const str = 'string--with---multiple----separators';
    const result = toCamelCasePrimitive(str);
    expect(result).to.equal('stringWithMultipleSeparators');
  });
})

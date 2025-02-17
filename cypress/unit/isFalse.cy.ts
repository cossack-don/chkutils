import { _checks} from '../../src'

describe('isFalse function', () => {
    const isFalse = _checks.isFalse

    it('should return true if the value is false', () => {
        // Проверяем, что функция возвращает true для значения false
        expect(isFalse(false)).to.be.true;
    });

    it('should return false if the value is not false', () => {
        // Проверяем, что функция возвращает false для других значений
        expect(isFalse(true)).to.be.false; // true
        expect(isFalse(0)).to.be.false; // число 0
        expect(isFalse(1)).to.be.false; // число 1
        expect(isFalse('')).to.be.false; // пустая строка
        expect(isFalse('false')).to.be.false; // строка "false"
        expect(isFalse({})).to.be.false; // объект
        expect(isFalse([])).to.be.false; // массив
        expect(isFalse(null)).to.be.false; // null
        expect(isFalse(undefined)).to.be.false; // undefined
        expect(isFalse(NaN)).to.be.false; // NaN
        expect(isFalse(() => {})).to.be.false; // функция
    });
});
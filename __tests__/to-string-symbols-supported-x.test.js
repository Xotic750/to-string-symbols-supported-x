import noop from 'lodash/noop';
import toStr from 'src/to-string-symbols-supported-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('basic tests', function() {
  it('should return a string for everything', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, null, undefined, noop, [], /r/];
    const expected = values.map(String);
    const actual = values.map(toStr);
    expect(actual).toStrictEqual(expected);
  });

  it('should throw for Object.create(null)', function() {
    expect.assertions(1);
    expect(function() {
      toStr(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should return a string for Symbol', function() {
    expect.assertions(2);
    /* eslint-disable-next-line compat/compat */
    const sym = Symbol('foo');
    expect(toStr(sym)).toBe('Symbol(foo)');
    expect(toStr(Object(sym))).toBe('Symbol(foo)');
  });
});

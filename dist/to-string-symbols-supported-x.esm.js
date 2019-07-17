import hasSymbols from 'has-symbol-support-x';
import isSymbol from 'is-symbol';
/* eslint-disable-next-line compat/compat */

var pToString = hasSymbols && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && isSymbol;
/** @type {Function} */

var castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : castString(value);
};

export default toStringSymbolsSupported;

//# sourceMappingURL=to-string-symbols-supported-x.esm.js.map
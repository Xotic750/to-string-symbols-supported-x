<a
  href="https://travis-ci.org/Xotic750/to-string-symbols-supported-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-string-symbols-supported-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-symbols-supported-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-string-symbols-supported-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-symbols-supported-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-string-symbols-supported-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-string-symbols-supported-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-string-symbols-supported-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-string-symbols-supported-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-string-symbols-supported-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-string-symbols-supported-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-string-symbols-supported-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-string-symbols-supported-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-string-symbols-supported-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-string-symbols-supported-x"></a>

## to-string-symbols-supported-x

ES6 abstract ToString with Symbol conversion support.

**See**: [7.1.12 ToString ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring)  
**Version**: 1.0.2  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](https://opensource.org/licenses/MIT)  
**Copyright**: Xotic750  
<a name="exp_module_to-string-symbols-supported-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>string</code> ⏏

The abstract operation ToString converts argument to a value of type String,
however the specification states that if the argument is a Symbol then a
'TypeError' is thrown. This version also allows Symbols be converted to
a string. Other uncoercible exotics will still throw though.

**Kind**: Exported function  
**Returns**: <code>string</code> - The converted value.

| Param | Type            | Description                       |
| ----- | --------------- | --------------------------------- |
| value | <code>\*</code> | The value to convert to a string. |

**Example**

```js
import toStringSymbolsSupported from 'to-string-symbols-supported-x';

console.log(toStringSymbolsSupported()); // 'undefined'
console.log(toStringSymbolsSupported(null)); // 'null'
console.log(toStringSymbolsSupported('abc')); // 'abc'
console.log(toStringSymbolsSupported(true)); // 'true'
console.log(toStringSymbolsSupported(Symbol('foo'))); // 'Symbol('foo')'
console.log(toStringSymbolsSupported(Object(Symbol('foo')))); // 'Symbol('foo')'
console.log(toStringSymbolsSupported(Object.create(null))); // TypeError
```

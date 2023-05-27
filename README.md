# JOVP
JSON Object Validation Package

---

### How to use functions:
+ validateEqual:
<br> TRUE:
<code>validateEqual({name: 'John', age: 21}, {name: 'string', age: 'number'})</code>
<br> FALSE:
<code>validateEqual({name: 'John', age: 21}, {name: 'array', age: 'number'})</code>

+ validateMinimal:
<br> TRUE:
<code>validateMinimal({name: 'John', age: 21}, {age: 'number'})</code>
<br> FALSE:
<code>validateMinimal({age: 21}, {age: 'number'})</code>

+ cutToFilter:
<br> {name: 'John', age: 21}:
<code>cutToFilter({name: 'John', age: 21, mail: 'test@test.tes'}, {name: 'string', age: 'number'})</code>

+ validateRules
<br> TRUE:
<code>validateRules({name: 'John', age: 24}, {age: (value) => value > 21})</code>
<br> FALSE:
<code>validateRules({name: 'John', age: 17}, {age: (value) => value > 21})</code>

+ validateArrayType
<br> TRUE:
<code>validateArrayType([1, 2, 4], 'number')</code>
<br> FALSE:
<code>validateArrayType([1, 2, 4], 'string')</code>

+ validateObjectArrayFilter
<br> TRUE:
<code>validateObjectArrayFilter([{a: 1, b: 2},{b: 3, a: 2}], {a: 'number', b: 'number'})</code>
<br> FALSE:
<code>validateObjectArrayFilter([{a: 1, b: 2},{b: 3, a: 2}], { a: 'number', b: 'string' })</code>

+ validateArrayRule
<br> TRUE:
<code>validateArrayRule([1, 2, 3, 4], (value) => value > 0)</code>
<br> FALSE:
<code>validateArrayRule([1, 2, 3, -4], (value) => value > 0)</code>

---

### Types
+ string

+ number

+ array

+ object (Includes arrays)

+ jobj (Excludes arrays)

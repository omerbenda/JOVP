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

---

### Types
+ string

+ number

+ array

+ object (Includes arrays)

+ jobj (Excludes arrays)

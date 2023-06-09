const {
  validateEqual,
  validateMinimal,
  cutToFilter,
  validateRules,
  validateObjectArrayFilter,
  validateArrayType,
  validateArrayRule,
} = require('./jovp.js');

test('validateEqual - empty', () => {
  expect(validateEqual({}, {})).toBe(true);
});

test('validateEqual - correct value', () => {
  expect(validateEqual({ a: 1 }, { a: 'number' })).toBe(true);
});

test('validateEqual - correct value array', () => {
  expect(
    validateEqual({ a: 1, b: [1, 2, 3] }, { a: 'number', b: 'array' })
  ).toBe(true);
});

test('validateEqual - object instead of array', () => {
  expect(
    validateEqual(
      { a: 1, b: { a: 1, b: 2, c: 3 } },
      { a: 'number', b: 'array' }
    )
  ).toBe(false);
});

test('validateEqual - correct value jobj', () => {
  expect(
    validateEqual({ a: 1, b: { a: 1, b: 2, c: 3 } }, { a: 'number', b: 'jobj' })
  ).toBe(true);
});

test('validateEqual - unordered', () => {
  expect(validateEqual({ a: 1, b: 3 }, { b: 'number', a: 'number' })).toBe(
    true
  );
});

test('validateEqual - different key', () => {
  expect(validateEqual({ a: 1 }, { b: 'number' })).toBe(false);
});

test('validateEqual - object empty', () => {
  expect(validateEqual({}, { a: 'string' })).toBe(false);
});

test('validateEqual - filter empty', () => {
  expect(validateEqual({ a: 1 }, {})).toBe(false);
});

test('validateEqual - different type', () => {
  expect(validateEqual({ a: 1 }, { a: 'string' })).toBe(false);
});

test('validateMinimal - empty', () => {
  expect(validateMinimal({}, {})).toBe(true);
});

test('validateMinimal - same value', () => {
  expect(validateMinimal({ a: 1 }, { a: 'number' })).toBe(true);
});

test('validateMinimal - different key', () => {
  expect(validateMinimal({ a: 1 }, { b: 'number' })).toBe(false);
});

test('validateMinimal - object empty', () => {
  expect(validateMinimal({}, { a: 'number' })).toBe(false);
});

test('validateMinimal - object', () => {
  expect(validateMinimal({ a: { b: 'test' } }, { a: 'jobj' })).toBe(true);
});

test('validateMinimal - object instead of array', () => {
  expect(validateMinimal({ a: 'test' }, { a: 'array' })).toBe(false);
});

test('validateMinimal - array', () => {
  expect(validateMinimal({ a: [1, 2, 3, 4] }, { a: 'array' })).toBe(true);
});

test('validateMinimal - array instead of object', () => {
  expect(validateMinimal({ a: [1, 2, 3, 4] }, { a: 'jobj' })).toBe(false);
});

test('validateMinimal - filter empty', () => {
  expect(validateMinimal({ a: 1 }, {})).toBe(true);
});

test('validateMinimal - different type', () => {
  expect(validateMinimal({ a: 1 }, { a: 'string' })).toBe(false);
});

test('cutToFilter - empty', () => {
  expect(cutToFilter({}, {})).toStrictEqual({});
});

test('cutToFilter - single value', () => {
  expect(cutToFilter({ a: 1 }, { a: 'number' })).toEqual({ a: 1 });
});

test('cutToFilter - two values', () => {
  expect(cutToFilter({ a: 1, b: 2 }, { a: 'number', b: 'number' })).toEqual({
    a: 1,
    b: 2,
  });
});

test('cutToFilter - value cut', () => {
  expect(cutToFilter({ a: 1, b: 2 }, { a: 'number' })).toEqual({ a: 1 });
});

test('cutToFilter - filter value missing', () => {
  expect(() => cutToFilter({ a: 1 }, { a: 'number', b: 'number' })).toThrow();
});

test('validateRules - empty', () => {
  expect(validateRules({}, {})).toBe(true);
});

test('validateRules - single numeric rule true', () => {
  expect(
    validateRules({ a: 1 }, { a: (value) => value > 0 && value < 10 })
  ).toBe(true);
});

test('validateRules - single numeric rule false', () => {
  expect(
    validateRules({ a: 1 }, { a: (value) => value < 0 || value > 10 })
  ).toBe(false);
});

test('validateRules - two trues', () => {
  expect(
    validateRules(
      { a: 1, b: 'test' },
      { a: (value) => value > 0, b: (value) => value.length > 2 }
    )
  ).toBe(true);
});

test('validateRules - two false', () => {
  expect(
    validateRules(
      { a: 1, b: 'test' },
      { a: (value) => value < 0, b: (value) => value.length < 2 }
    )
  ).toBe(false);
});

test('validateRules - first true second false', () => {
  expect(
    validateRules(
      { a: 1, b: 'test' },
      { a: (value) => value > 0, b: (value) => value.length < 2 }
    )
  ).toBe(false);
});

test('validateRules - first false second true', () => {
  expect(
    validateRules(
      { a: 1, b: 'test' },
      { a: (value) => value < 0, b: (value) => value.length > 2 }
    )
  ).toBe(false);
});

test('validateRules - both false', () => {
  expect(
    validateRules(
      { a: 1, b: 'test' },
      { a: (value) => value < 0, b: (value) => value.length < 2 }
    )
  ).toBe(false);
});

test('validateRules - no rules', () => {
  expect(validateRules({ a: 1, b: 'test' }, {})).toBe(true);
});

test('validateRules - object filter true', () => {
  expect(
    validateRules(
      { a: 1, b: { name: 'John', age: 21 } },
      { b: (value) => value.age > 18 }
    )
  ).toBe(true);
});

test('validateRules - object filter false', () => {
  expect(
    validateRules(
      { a: 1, b: { name: 'John', age: 7 } },
      { b: (value) => value.age > 18 }
    )
  ).toBe(false);
});

test('validateRules - array filter true', () => {
  expect(
    validateRules(
      { a: 1, b: [1, 2, 3, 4] },
      { b: (value) => value.every((element) => element > 0) }
    )
  ).toBe(true);
});

test('validateRules - array filter false', () => {
  expect(
    validateRules(
      { a: 1, b: [1, 2, 3, 4, -5, 6] },
      { b: (value) => value.every((element) => element > 0) }
    )
  ).toBe(false);
});

test('validateObjectArrayFilter - all true', () => {
  expect(
    validateObjectArrayFilter(
      [
        { a: 1, b: 2 },
        { b: 3, a: 2 },
      ],
      { a: 'number', b: 'number' }
    )
  ).toBe(true);
});

test('validateObjectArrayFilter - all false', () => {
  expect(
    validateObjectArrayFilter(
      [
        { a: 1, b: 2 },
        { b: 3, a: 2 },
      ],
      { a: 'string', b: 'string' }
    )
  ).toBe(false);
});

test('validateObjectArrayFilter - true and false', () => {
  expect(
    validateObjectArrayFilter(
      [
        { a: 1, b: 2 },
        { b: 3, a: 2 },
      ],
      { a: 'number', b: 'string' }
    )
  ).toBe(false);
});

test('validateObjectArrayFilter - value missing', () => {
  expect(
    validateObjectArrayFilter([{ a: 1 }, { b: 3, a: 2 }], {
      a: 'number',
      b: 'string',
    })
  ).toBe(false);
});

test('validateArrayType - correct type number', () => {
  expect(
    validateArrayType([1, 2, 4], 'number')
  ).toBe(true);
});

test('validateArrayType - correct type array', () => {
  expect(
    validateArrayType([[1, 2, 3], ['test', 'test2'], []], 'array')
  ).toBe(true);
});

test('validateArrayType - correct type object', () => {
  expect(
    validateArrayType([{name: 'John', age: 21}, {name: 'James', age: 18}], 'jobj')
  ).toBe(true);
});

test('validateArrayType - empty', () => {
  expect(
    validateArrayType([], 'number')
  ).toBe(true);
});

test('validateArrayType - wrong type once', () => {
  expect(
    validateArrayType([1, 2, 'test', 4], 'number')
  ).toBe(false);
});

test('validateArrayType - wrong type all', () => {
  expect(
    validateArrayType(['test', 'test2'], 'number')
  ).toBe(false);
});

test('validateArrayType - wrong type start', () => {
  expect(
    validateArrayType(['test', 4, 1, 2], 'number')
  ).toBe(false);
});

test('validateArrayType - wrong type end', () => {
  expect(
    validateArrayType([1, 2, 'test'], 'number')
  ).toBe(false);
});

test('validateArrayRule - all true', () => {
  expect(
    validateArrayRule([1, 2, 3, 4], (value) => value > 0)
  ).toBe(true);
});

test('validateArrayRule - all false', () => {
  expect(
    validateArrayRule([1, 2, 3, 4], (value) => value < 0)
  ).toBe(false);
});

test('validateArrayRule - first false', () => {
  expect(
    validateArrayRule([-1, 2, 3, 4], (value) => value > 0)
  ).toBe(false);
});

test('validateArrayRule - last false', () => {
  expect(
    validateArrayRule([1, 2, 3, -4], (value) => value > 0)
  ).toBe(false);
});

test('validateArrayRule - middle false', () => {
  expect(
    validateArrayRule([1, 2, -3, 4], (value) => value > 0)
  ).toBe(false);
});

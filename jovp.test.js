const { validateEqual, validateMinimal, cutToFilter } = require('./jovp.js');

test('validateEqual - empty', () => {
    expect(validateEqual({}, {})).toBe(true);
});

test('validateEqual - correct value', () => {
    expect(validateEqual({a: 1}, {a: 'number'})).toBe(true);
});

test('validateEqual - unordered', () => {
    expect(validateEqual({a: 1, b: 3}, {b: 'number', a: 'number'})).toBe(true);
});

test('validateEqual - different key', () => {
    expect(validateEqual({a: 1}, {b: 'number'})).toBe(false);
});

test('validateEqual - object empty', () => {
    expect(validateEqual({}, {a: 'string'})).toBe(false);
});

test('validateEqual - filter empty', () => {
    expect(validateEqual({a: 1}, {})).toBe(false);
});

test('validateEqual - different type', () => {
    expect(validateEqual({a: 1}, {a: 'string'})).toBe(false);
});

test('validatefilter - empty', () => {
    expect(validateMinimal({}, {})).toBe(true);
});

test('validateFilter - same value', () => {
    expect(validateMinimal({a: 1}, {a: 'number'})).toBe(true);
});

test('validateFilter - different value', () => {
    expect(validateMinimal({b: 12}, {b: 'number'})).toBe(true);
});

test('validateFilter - different key', () => {
    expect(validateMinimal({a: 1}, {b: 'number'})).toBe(false);
});

test('validateFilter - object empty', () => {
    expect(validateMinimal({}, {a: 'number'})).toBe(false);
});

test('validateFilter - filter empty', () => {
    expect(validateMinimal({a: 1}, {})).toBe(true);
});

test('validateFilter - different type', () => {
    expect(validateMinimal({a: 1}, {a: 'string'})).toBe(false);
});

test('cutToFilter - empty', () => {
    expect(cutToFilter({}, {})).toStrictEqual({});
});

test('cutToFilter - single value', () => {
    expect(cutToFilter({a: 1}, {a: 'number'})).toEqual({a: 1});
});

test('cutToFilter - two values', () => {
    expect(cutToFilter({a: 1, b: 2}, {a: 'number', b: 'number'})).toEqual({a: 1, b: 2});
});

test('cutToFilter - value cut', () => {
    expect(cutToFilter({a: 1, b: 2}, {a: 'number'})).toEqual({a: 1});
});

test('cutToFilter - filter value missing', () => {
    expect(() => cutToFilter({a: 1}, {a: 'number', b: 'number'})).toThrow();
});

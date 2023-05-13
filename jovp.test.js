const jovp = require('./jovp');

test('validateEqual - empty', () => {
    expect(jovp.validateEqual({}, {})).toBe(true);
});

test('validateEqual - correct value', () => {
    expect(jovp.validateEqual({a: 1}, {a: 'number'})).toBe(true);
});

test('validateEqual - different key', () => {
    expect(jovp.validateEqual({a: 1}, {b: 'number'})).toBe(false);
});

test('validateEqual - object empty', () => {
    expect(jovp.validateEqual({}, {a: 'string'})).toBe(false);
});

test('validateEqual - filter empty', () => {
    expect(jovp.validateEqual({a: 1}, {})).toBe(false);
});

test('validateEqual - different type', () => {
    expect(jovp.validateEqual({a: 1}, {a: 'string'})).toBe(false);
});

test('validatefilter - empty', () => {
    expect(jovp.validateFilter({}, {})).toBe(true);
});

test('validateFilter - same value', () => {
    expect(jovp.validateFilter({a: 1}, {a: 'number'})).toBe(true);
});

test('validateFilter - different value', () => {
    expect(jovp.validateFilter({b: 12}, {b: 'number'})).toBe(true);
});

test('validateFilter - different key', () => {
    expect(jovp.validateFilter({a: 1}, {b: 'number'})).toBe(false);
});

test('validateFilter - object empty', () => {
    expect(jovp.validateFilter({}, {a: 'number'})).toBe(false);
});

test('validateFilter - filter empty', () => {
    expect(jovp.validateFilter({a: 1}, {})).toBe(true);
});

test('validateFilter - different type', () => {
    expect(jovp.validateFilter({a: 1}, {a: 'string'})).toBe(false);
});
const jovp = require('./jovp');

test('validateEqual - empty', () => {
    expect(jovp.validateEqual({}, {})).toBe(true);
});

test('validateEqual - same value', () => {
    expect(jovp.validateEqual({a: 1}, {a: 1})).toBe(true);
});

test('validateEqual - different value', () => {
    expect(jovp.validateEqual({b: 12}, {b: 4})).toBe(true);
});

test('validateEqual - different key same value', () => {
    expect(jovp.validateEqual({a: 1}, {b: 1})).toBe(false);
});

test('validateEqual - different key different value', () => {
    expect(jovp.validateEqual({a: 1}, {b: 2})).toBe(false);
});

test('validateEqual - object empty', () => {
    expect(jovp.validateEqual({}, {a: 1})).toBe(false);
});

test('validateEqual - filter empty', () => {
    expect(jovp.validateEqual({a: 1}, {})).toBe(false);
});

test('validatefilter - empty', () => {
    expect(jovp.validateFilter({}, {})).toBe(true);
});

test('validateFilter - same value', () => {
    expect(jovp.validateFilter({a: 1}, {a: 1})).toBe(true);
});

test('validateFilter - different value', () => {
    expect(jovp.validateFilter({b: 12}, {b: 4})).toBe(true);
});

test('validateFilter - different key same value', () => {
    expect(jovp.validateFilter({a: 1}, {b: 1})).toBe(false);
});

test('validateFilter - different key different value', () => {
    expect(jovp.validateFilter({a: 1}, {b: 2})).toBe(false);
});

test('validateFilter - object empty', () => {
    expect(jovp.validateFilter({}, {a: 1})).toBe(false);
});

test('validateFilter - filter empty', () => {
    expect(jovp.validateFilter({a: 1}, {})).toBe(true);
});

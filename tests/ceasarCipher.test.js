import caesarCipher from '../functions/caesarCipher'

test('Shifts the string 1 char ahead', () => {
    expect(caesarCipher('abcde')).toBe('bcdef');
});

test('Test wrap of char', () => {
    expect(caesarCipher('zzzzz')).toBe('aaaaa');
});

test('Test wrap of char', () => {
    expect(caesarCipher('zzzzz')).toBe('aaaaa');
});

test('Test punctuation', () => {
    expect(caesarCipher('.....')).toBe('.....');
});

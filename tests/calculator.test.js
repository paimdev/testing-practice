import calculator from '../functions/calculator'

test('Add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Subtract two numbers', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('Divide two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Multiply two numbers', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
});

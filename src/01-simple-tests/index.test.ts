// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = { a: 5, b: 3, action: Action.Add };
    const result = simpleCalculator(input);

    expect(result).toBe(8);
  });

  test('should subtract two numbers', () => {
    const input = { a: 5, b: 3, action: Action.Subtract };
    const result = simpleCalculator(input);

    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    const input = { a: 5, b: 3, action: Action.Multiply };
    const result = simpleCalculator(input);

    expect(result).toBe(15);
  });

  test('should divide two numbers', () => {
    const input = { a: 6, b: 3, action: Action.Divide };
    const result = simpleCalculator(input);

    expect(result).toBe(2);
  });

  test('should exponential two numbers', () => {
    const input = { a: 2, b: 3, action: Action.Exponentiate };
    const result = simpleCalculator(input);

    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const input = { a: 5, b: 3, action: 'invalid' };
    const result = simpleCalculator(input);

    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    let input: {
      a: unknown;
      b: unknown;
      action: unknown;
    } = { a: '5', b: 3, action: Action.Add };
    let result = simpleCalculator(input);

    expect(result).toBeNull();

    input = { a: 5, b: '3', action: Action.Add };
    result = simpleCalculator(input);

    expect(result).toBeNull();

    input = { a: 'five', b: 'three', action: Action.Add };
    result = simpleCalculator(input);

    expect(result).toBeNull();

    input = { a: undefined, b: undefined, action: undefined };
    result = simpleCalculator(input);

    expect(result).toBeNull();
  });
});

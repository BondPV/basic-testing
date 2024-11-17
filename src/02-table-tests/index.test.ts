// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: -1, b: -2, action: Action.Subtract, expected: 1 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: -1, b: -2, action: Action.Multiply, expected: 2 },
  { a: 0, b: 5, action: Action.Multiply, expected: 0 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: -6, b: -2, action: Action.Divide, expected: 3 },
  { a: -6, b: 2, action: Action.Divide, expected: -3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: -2, b: 3, action: Action.Exponentiate, expected: -8 },
  { a: -2, b: -3, action: Action.Exponentiate, expected: -0.125 },
  { a: 'string', b: 'string', action: Action.Exponentiate, expected: null },
  { a: null, b: undefined, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`calculates ${a} ${action} ${b} to be ${expected}`, () => {
      const result = simpleCalculator({ a, b, action });

      expect(result).toBe(expected);
    });
  });
});

// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual('./index');

  return {
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(jest.fn);

    mockOne();
    mockTwo();
    mockThree();

    expect(consoleLogSpy).not.toHaveBeenCalledWith('foo');
    expect(consoleLogSpy).not.toHaveBeenCalledWith('bar');
    expect(consoleLogSpy).not.toHaveBeenCalledWith('baz');

    consoleLogSpy.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(jest.fn);

    unmockedFunction();

    expect(consoleLogSpy).toHaveBeenCalledWith('I am not mocked');

    consoleLogSpy.mockRestore();
  });
});

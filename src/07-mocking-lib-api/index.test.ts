// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const axiosClient = { get: jest.fn() };
  const path = '/posts';
  const data = [{ id: 1, title: 'Test Post' }];

  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue(axiosClient);
    (axiosClient.get as jest.Mock).mockResolvedValueOnce({ data });

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi('/posts');

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const result = await throttledGetDataFromApi(path);

    jest.runAllTimers();

    expect(axiosClient.get).toHaveBeenCalledWith(path);
    expect(result).toEqual(data);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(path);

    expect(result).toEqual(data);
  });
});

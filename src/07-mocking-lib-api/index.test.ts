// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const axiosClient = { get: jest.fn() };
  const relativePath = '/posts';
  const responseData = [{ id: 1, title: 'Test Post' }];
  
  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue(axiosClient);
    (axiosClient.get as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi('/posts');

    expect(axios.create).toHaveBeenCalledWith({ baseURL: 'https://jsonplaceholder.typicode.com'});
  });

  test('should perform request to correct provided url', async () => {
    const result = await throttledGetDataFromApi(relativePath);

    jest.runAllTimers();

    expect(axiosClient.get).toHaveBeenCalledWith(relativePath);
    expect(result).toEqual(responseData);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(relativePath);

    expect(result).toEqual(responseData);
  });
});
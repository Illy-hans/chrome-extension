import { fetchURL } from "../../service/fetchImage";
import { expect, it, describe } from '@jest/globals';

global.fetch = jest.fn();

describe('fetchURL', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('should return the hdurl on successful fetch', async () => {
        const mockData = { hdurl: 'http://example.com/image.jpg' };
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => mockData
        });

        const result = await fetchURL();
        expect(result).toBe(mockData.hdurl);
    });

    it('should throw an error on fetch failure', async () => {
        const errorMessage = 'HTTP error! status: 500';
        (fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
            json: async () => ({})
        });

        await expect(fetchURL()).rejects.toThrow(errorMessage);
    });

    it('should throw an error if fetch throws an error', async () => {
        const errorMessage = 'Network error';
        (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

        await expect(fetchURL()).rejects.toThrow(errorMessage);
    });
});
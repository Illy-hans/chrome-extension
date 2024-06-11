import { vi, describe, beforeEach, it } from 'vitest';
import { fetchURL } from '../../service/fetchImage';

vi.mock("../../fetchImage.ts");

describe("fetchURL", () => {

    it("should return the dummy URL", async () => {
        const dummyUrl = { hdurl: 'https://example.com/image.jpg' }

        const mockResponse = {
            ok: true,
            statusText: "OK",
            json: async () => dummyUrl, 
        } as Response;

        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
        expect(await fetchURL()).toEqual(dummyUrl.hdurl)
        });

    it("should throw an error if the fetch fails", async () => {
        const dummyUrl = { hdurl: '' }

        const mockResponse = {
            ok: false,
            status: 404,
            json: async () => dummyUrl, 
        } as Response;

        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
        await expect(fetchURL()).rejects.toThrowError('HTTP error! status: 404');
        });
});

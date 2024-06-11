import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App.tsx';
import { vi, it, describe, expect} from 'vitest';

vi.mock("../../fetchImage.ts");

describe("App", () => {
  it('sets background image correctly', async () => {
    const dummyUrl = { hdurl: 'https://example.com/image.jpg' }

        const mockResponse = {
            ok: true,
            statusText: "OK",
            json: async () => dummyUrl, 
        } as Response;

        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
      
      render(<App />)

    // Wait for the imageURL to be set and the component to re-render
      const divElement: HTMLElement = await waitFor(() => screen.getByTestId('background-div'));

    // Assert the background image style
      expect(divElement.style.backgroundImage).toContain(`url(${dummyUrl.hdurl})`);
  });
});
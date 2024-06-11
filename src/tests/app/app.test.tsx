import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App.tsx';
import { fetchURL } from '../../service/fetchImage.ts';

// Mock the fetchURL function
jest.mock('../service/fetchImage.ts', () => ({
    fetchURL: jest.fn()
}));

test('sets background image correctly', async () => {
  // Mock implementation of fetchURL
    const mockImageURL: string = 'https://example.com/your-image.jpg';
    (fetchURL as jest.Mock).mockResolvedValue(mockImageURL);

    render(<App />)

  // Wait for the imageURL to be set and the component to re-render
    const divElement: HTMLElement = await waitFor(() => screen.getByTestId('background-div'));

  // Assert the background image style
    expect(divElement).toContain(`background-image: url("${mockImageURL}")`);
});
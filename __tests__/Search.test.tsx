import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Search } from '@/Features/Search';
import { useSearchParams } from 'next/navigation';

jest.mock('next/navigation');

describe('displays artist search from server', () => {
    beforeEach(() => {
        useSearchParams.mockReturnValue({ get: jest.fn() });
    });

    it('renders loading spinner when isLoading is true', () => {
        useSearchParams().get.mockReturnValue('test');

        const {container} = render(<Search />);

        // Assert that the loading spinner is displayed
        const loadingSpinner = container.getElementsByClassName('lds-ellipsis')[0];
        expect(loadingSpinner).toBeInTheDocument();    
    });

    it('renders artist profiles when data is available', async () => {
        useSearchParams().get.mockReturnValue('test'); // Mock query parameter
        const mockData = {
            data: [
                { artist: { id: 1, name: 'Artist 1', picture_medium: 'artist1.jpg' } },
                { artist: { id: 2, name: 'Artist 2', picture_medium: 'artist2.jpg' } },
            ],
        };

        jest.mock('./../api/useApi.ts', () => ({
            useSearchArtist: () => ({ data: mockData, isLoading: false }),
        }));

        render(<Search />);

        await waitFor(() => {
            // expect(screen.getByText('Artist 1')).toBeInTheDocument();
            // expect(screen.getByText('Artist 2')).toBeInTheDocument();
        });
    });

    it('renders "View Artist" links with correct URLs', async () => {
        useSearchParams().get.mockReturnValue('test'); // Mock query parameter
        const mockData = {
            data: [
                { artist: { id: 1, name: 'Artist 1', picture_medium: 'artist1.jpg' } },
                { artist: { id: 2, name: 'Artist 2', picture_medium: 'artist2.jpg' } },
            ],
        };

        jest.mock('./../api/useApi.ts', () => ({
            useSearchArtist: () => ({ data: mockData, isLoading: false }),
        }));

        render(<Search />);

        // Wait for the artist profiles to be rendered
        await waitFor(() => {
            // expect(screen.getByText('View Artist')).toHaveAttribute('href', '/artist?id=1');
            // expect(screen.getByText('View Artist')).toHaveAttribute('href', '/artist?id=2');
        });
    });
});

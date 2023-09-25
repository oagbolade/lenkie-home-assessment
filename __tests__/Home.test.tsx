import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '@/Features/Home/index';

test("Page is being rendered", () => {
    render(<Home />);
    const homeScreenText = screen.getByText("Search our Database of Artists");
    expect(homeScreenText).toBeInTheDocument();
});

test("Input functionality works", async () => {
    render(<Home />);
    const searchInput: any = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, {target: {value: 'eminem'}});
    expect(searchInput.value).toMatch('eminem');
    const searchButton = screen.getByRole('link');
    expect(searchButton).toHaveAttribute('href', '/search?name=eminem');
});

// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZeroPillar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZeroPillar/i);
    expect(titleElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cover_page from './cover-page';

describe('<Cover_page />', () => {
  test('it should mount', () => {
    render(<Cover_page />);
    
    const coverPage = screen.getByTestId('Cover_page');

    expect(coverPage).toBeInTheDocument();
  });
});
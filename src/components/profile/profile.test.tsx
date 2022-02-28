import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  ButtonPage from './profile';

describe('<ButtonPage />', () => {
  test('it should mount', () => {
    render(<ButtonPage />);
    
    const buttonPage = screen.getByTestId('ButtonPage');

    expect(buttonPage).toBeInTheDocument();
  });
});

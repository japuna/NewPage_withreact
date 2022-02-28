import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  ButtonPage from './button';

describe('<ButtonPage />', () => {
  test('it should mount', () => {
    render(<ButtonPage text="CV"/>);
    
    const buttonPage = screen.getByTestId('ButtonPage');

    expect(buttonPage).toBeInTheDocument();
  });
});

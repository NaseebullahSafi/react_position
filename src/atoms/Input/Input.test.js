import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';

afterEach(cleanup)

describe('Input Component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot()
  })
})
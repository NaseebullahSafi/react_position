import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Rover from './Rover';

afterEach(cleanup)

describe('Rover Component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Rover />);
    expect(asFragment()).toMatchSnapshot()
  })
})
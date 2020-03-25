import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from './Icon';

afterEach(cleanup)

describe('Icon Component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Icon />);
    expect(asFragment()).toMatchSnapshot()
  })
})
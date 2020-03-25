import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

afterEach(cleanup)

describe('Controls Component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Controls onUpdate={() => {}} />);
    expect(asFragment()).toMatchSnapshot()
  })
})
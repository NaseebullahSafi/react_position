import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Mars from './Mars';

afterEach(cleanup)

describe('Mars Component', () => {
  test('Matches the snapshot', () => {
    const dimension = [6,6]
    const rovers = [{
      x: 0,
      y: 0,
      face: 'N',
      path: ''
  }]
    const { asFragment } = render(<Mars dimension={dimension} rovers={rovers} />);
    expect(asFragment()).toMatchSnapshot()
  })
})
import React from 'react';
import { render } from '@testing-library/react';

import Chip from './Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Chip text="test" />);
    getByText('test');
  });
});
